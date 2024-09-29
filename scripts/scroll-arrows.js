document.addEventListener('scroll', function () {
    const scrollDownArrow = document.getElementById('scrollDownArrow');
    const scrollRightArrow = document.getElementById('scrollRightArrow');
    const projectsDiv = document.getElementById('projects');
    const projectsDivPosition = projectsDiv.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (projectsDivPosition > windowHeight / 2) {
        scrollDownArrow.style.display = 'block';
    } else {
        scrollDownArrow.style.display = 'none';
    }

    if (projectsDivPosition <= windowHeight / 2) {
        scrollRightArrow.style.display = 'block';
        scrollRightArrow.style.animation = 'slide-in-right 1s forwards';
    } else {
        scrollRightArrow.style.animation = 'slide-out-right 1s forwards';
    }
});