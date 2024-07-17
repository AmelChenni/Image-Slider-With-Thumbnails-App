const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const imgs = document.querySelector('.imgs');

let currentSlide = 0;

slides.forEach((img, index) => {
    img.addEventListener('click', function() {
        let imgClone = img.cloneNode(true);
        imgs.innerHTML = "";
        imgs.appendChild(imgClone);
        imgClone.style.opacity = 1;
        currentSlide = index;
        updateThumbnailActiveSlide(currentSlide);
        updateButtons();
    });
});

prevBtn.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
        updateGallery();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateGallery();
    }
});

function updateGallery() {
    let imgClone = slides[currentSlide].cloneNode(true);
    imgs.innerHTML = "";
    imgs.appendChild(imgClone);
    imgClone.style.opacity = "1";
    updateButtons();
    updateThumbnailActiveSlide(currentSlide);
}

function updateButtons() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
}

function updateThumbnailActiveSlide(index) {
    slides.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0.4';
    });
}

// Initially update the thumbnail opacity
updateThumbnailActiveSlide(currentSlide);
