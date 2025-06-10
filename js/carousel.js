const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const dotsCarousel = document.getElementById('carousel-dots');
let carouselCurrentIndex = 0;
let carouselDots = [];

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            carouselCurrentIndex = i;
            updateCarousel(carouselCurrentIndex);
        });
        dotsCarousel.appendChild(dot);
        carouselDots.push(dot);
    }
}

function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;

    carouselDots.forEach(dot => dot.classList.remove('active'));
    if (carouselDots[index]) {
        carouselDots[index].classList.add('active');
    }
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    carouselCurrentIndex = (carouselCurrentIndex + 1) % slides.length;
    updateCarousel(carouselCurrentIndex);
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    carouselCurrentIndex = (carouselCurrentIndex - 1 + slides.length) % slides.length;
    updateCarousel(carouselCurrentIndex);
});

// Inicialização
createDots();
updateCarousel(0);