const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    const imageData = ctx.getImageData(0, 0, 2 * canvas.width, canvas.height);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.putImageData(imageData, 0, 0);

}
function drawRandomShapes() {
    const numberOfShapes = 20; 

    for (let i = 0; i < numberOfShapes; i++) {
        const shapeType = Math.floor(Math.random() * 3);

        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 50 + 10;
        const rotation = Math.random() * Math.PI * 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);

        ctx.beginPath();

        switch (shapeType) {
            case 0:
                ctx.arc(0, 0, size, 0, Math.PI * 2);
                ctx.strokeStyle = getRandomColor();
                ctx.lineWidth = 2;
                ctx.stroke();
                break;
            case 1:
                ctx.strokeStyle = getRandomColor();
                ctx.lineWidth = 1;
                ctx.strokeRect(-size / 2, -size / 2, size, size);
                break;
            case 2:
                ctx.moveTo(0, -size / 2);
                ctx.lineTo(size / 2, size / 2);
                ctx.lineTo(-size / 2, size / 2);
                ctx.closePath();
                ctx.strokeStyle = getRandomColor();
                ctx.lineWidth = 2;
                ctx.stroke();
                break;
        }

        ctx.restore();
    }
}

function getRandomColor() {
    return `rgb(${200}, 
                              ${Math.floor(Math.random() * 256)}, 
                              ${Math.floor(Math.random() * 256)})`;;
}

resizeCanvas(); 
drawRandomShapes();

window.addEventListener('resize', resizeCanvas);

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.lineWidth = 0.5;
    ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

canvas.addEventListener('dblclick', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

