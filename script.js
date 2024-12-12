document.addEventListener('DOMContentLoaded', function() {
    const descriptions = [
        document.querySelector('.project-description-1'),
        document.querySelector('.project-description-2'),
        document.querySelector('.project-description-3')
    ];

    let currentIndex = 0;

    function changeContent() {
        descriptions.forEach((description, index) => {
            description.style.display = (index === currentIndex) ? 'block' : 'none';
            description.style.animation = (index === currentIndex) ? 'slide-in 1s forwards' : '';
        });

        const images = document.querySelectorAll('.image-slider img');
        images.forEach((image, index) => {
            image.style.display = (index === currentIndex) ? 'block' : 'none';
        });

        currentIndex = (currentIndex + 1) % descriptions.length;
    }

    setInterval(changeContent, 10000);
});
