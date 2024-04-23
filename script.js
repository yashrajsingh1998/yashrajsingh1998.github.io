const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = images[0].clientWidth;

function slide() {
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    counter++;

    if (counter === images.length) {
        setTimeout(() => {
            carouselSlide.style.transition = 'none';
            carouselSlide.style.transform = `translateX(0px)`;
            counter = 1;
        }, 500);
    }
}

setInterval(slide, 3000); // Adjust the interval to change the slide duration
