const blogTrack = document.querySelector('.blog-carousel .carousel-track');
const blogCards = document.querySelectorAll('.blog-carousel .carousel-card');
const blogDotsContainer = document.getElementById('blog-dots');
const blogPrev = document.querySelector('.blog-carousel .carousel-btn.prev');
const blogNext = document.querySelector('.blog-carousel .carousel-btn.next');

let blogIndex = 0;
let cardsPerView = getCardsPerView();
let totalGroups = Math.ceil(blogCards.length / cardsPerView);

// Atualiza número de grupos ao redimensionar
window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    totalGroups = Math.max(blogCards.length - cardsPerView + 1, 1);
    updateBlogCarousel(blogIndex);
    createDots();
});

function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function updateBlogCarousel(index) {
    const offset = index * (100 / cardsPerView);
    blogTrack.style.transform = `translateX(-${offset}%)`;
    updateBlogDots();
}

function createDots() {
    blogDotsContainer.innerHTML = '';
    for (let i = 0; i < totalGroups; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === blogIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            blogIndex = i;
            updateBlogCarousel(blogIndex);
        });
        blogDotsContainer.appendChild(dot);
    }
}

function updateBlogDots() {
    const allDots = blogDotsContainer.querySelectorAll('.dot');
    allDots.forEach((dot) => dot.classList.remove('active'));
    if (allDots[blogIndex]) {
        allDots[blogIndex].classList.add('active');
    }
}

// Botões
blogNext.addEventListener('click', () => {
    blogIndex = (blogIndex + 1) % totalGroups;
    updateBlogCarousel(blogIndex);
});

blogPrev.addEventListener('click', () => {
    blogIndex = (blogIndex - 1 + totalGroups) % totalGroups;
    updateBlogCarousel(blogIndex);
});

// Inicialização
createDots();
updateBlogCarousel(blogIndex);
