let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 9000); // Change image every 9 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slide').length - 1;
    } else if (slideIndex >= document.querySelectorAll('.slide').length) {
        slideIndex = 0;
    }
    showSlides();
}