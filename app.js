const carouselSlide = document.getElementById('carousel-slider');
const carouselImage = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const imageWidth = carouselImage[0].width;
const negativeTranslateX = count => `translateX(${(Number(-imageWidth) * count)}px)`;
const positiveTranslateX = count => `translateX(${(Number(-imageWidth) * count)}px)`;
const transformEaseInOut = 'transform 0.4s ease-in-out';
let counter = 1;

carouselSlide.style.transform = negativeTranslateX(counter);

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImage.length - 1) return;
    carouselSlide.style.transition = transformEaseInOut;
    counter++;
    carouselSlide.style.transform = negativeTranslateX(counter);
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = transformEaseInOut;
    counter--;
    carouselSlide.style.transform = negativeTranslateX(counter);
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImage[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImage.length - 2;
        carouselSlide.style.transform = negativeTranslateX(counter);
    }
    if (carouselImage[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = negativeTranslateX(counter);
    }
});

