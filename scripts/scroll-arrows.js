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
    } else {
        scrollRightArrow.style.display = 'none';
    }
});


 const projectItems = document.querySelectorAll('.project-item[data-url]');
        const contentFrame = document.getElementById('content-frame');
        const placeholder = document.getElementById('placeholder');

        projectItems.forEach(item => {
            item.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                
                // Remove active class from all items
                projectItems.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Load content in iframe
                contentFrame.src = url;
                placeholder.style.display = 'none';
                contentFrame.style.display = 'block';
            });
        });

function resetToPlaceholder() {
    projectItems.forEach(i => i.classList.remove('active'));
    contentFrame.style.display = 'none';
    contentFrame.src = ''; // Clear iframe source
    placeholder.style.display = 'flex';
}

document.querySelector('.align-left').addEventListener('click', function(e) {
    e.stopPropagation();
    resetToPlaceholder();

});

const titleLinks = document.querySelector('.namefx');
if (titleLinks) {
    titleLinks.style.cursor = 'pointer';
    titleLinks.addEventListener('mousedown', function(e) {
        // Only reset if clicking the container, not the links themselves
        if (e.target === titleLinks) {
            e.preventDefault();
            e.stopPropagation();
            resetToPlaceholder();
        }
    });
}

