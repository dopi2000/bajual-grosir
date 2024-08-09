//  tangkap elemen yang di tagetkan
var hamburgerMenu = document.querySelector('.hamburger-menu');
var wrap = document.querySelector('.wrap');
var cart = document.querySelector('#cart')
var containerCart = document.querySelector('.container-cart')

//  ketika hamburger menu  di klik
hamburgerMenu.addEventListener('click', function(){
    wrap.classList.toggle('active');
    hamburgerMenu.style.color = 'var(--primary)';
    hamburgerMenu.style.padding = '6px'
    hamburgerMenu.style.border = '3px solid rgba(0, 0, 0, 0.2)';
});
// ketika icon cart cari di klik
cart.addEventListener('click', function(){
    containerCart.classList.toggle('active');
    wrap.classList.remove('active');
    hamburgerMenu.style.padding = '5px';
    hamburgerMenu.style.border = '1px solid rgba(0, 0, 0, 0.2)';
    
});

// ketika user mengklik di sembarangan target 
document.addEventListener('click', function(e){
    if(!hamburgerMenu.contains(e.target) && !wrap.contains(e.target)){
        wrap.classList.remove('active');
        hamburgerMenu.style.color = 'black';
        hamburgerMenu.style.padding = '5px';
        hamburgerMenu.style.border = '1px solid rgba(0, 0, 0, 0.2)';
    }
    if(!cart.contains(e.target) && !containerCart.contains(e.target)){
        containerCart.classList.remove('active');
    }
});


// ketika icon trash di klik
var trash = document.querySelectorAll('.bi-trash');
var cc = document.querySelectorAll('.wrap-cart');

trash[0].addEventListener('click', function(){
    cc[0].style.display = 'none';
})
trash[1].addEventListener('click', function(){
    cc[1].style.display = 'none';
})
trash[2].addEventListener('click', function(){
    cc[2].style.display = 'none';
})



// ketika tombol nonton tutorial menonton video di klik
var video = document.querySelector('.tutorial a');
var containerVideo = document.querySelector('.container-video');
var tutup = document.querySelector('#close');
var videoElement = document.querySelector('video');

video.addEventListener('click', function() {
    containerVideo.style.display = 'block'; 
});

tutup.addEventListener('click', function() {
    containerVideo.style.display = 'none';
    videoElement.pause();
    videoElement.currentTime = 0;
});

// ketika user mengklik disembarang container video
window.onclick = (e) => {
  if (e.target === containerVideo) {
      containerVideo.style.display = 'none';
      videoElement.pause();
      videoElement.currentTime = 0;
  }
}




// Mendapatkan semua elemen kategori dan produk
const kategori = document.querySelectorAll('.kategori p');
const cards = document.querySelectorAll('.card');

// Tambahkan event listener untuk setiap kategori
kategori.forEach(kat => {
  kat.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    // Tampilkan atau sembunyikan produk sesuai dengan kategori yang dipilih
    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });

    // Tambahkan kelas aktif untuk kategori yang dipilih
    kategori.forEach(kat => kat.classList.remove('active'));
    this.classList.add('active');
  });
});

// Tampilkan semua produk secara default saat halaman dimuat
document.querySelector('[data-category="all"]').click();


// // slide otomatis
// let currentIndex = 0;

// const slides = document.querySelector('.slides');
// const slideImages = document.querySelectorAll('.slide');
// const totalSlides = slideImages.length;

// document.querySelector('.kanan').addEventListener('click', () => {
//     moveToNextSlide();
// });

// document.querySelector('.kiri').addEventListener('click', () => {
//     moveToPrevSlide();
// });

// function moveToNextSlide() {
//     if (currentIndex === totalSlides - 1) {
//         currentIndex = 0;
//     } else {
//         currentIndex++;
//     }
//     updateSlidePosition();
// }

// function moveToPrevSlide() {
//     if (currentIndex === 0) {
//         currentIndex = totalSlides - 1;
//     } else {
//         currentIndex--;
//     }
//     updateSlidePosition();
// }

// function updateSlidePosition() {
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Auto slide
// setInterval(() => {
//     moveToNextSlide();
// }, 3000);

// slide show otomatis
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

