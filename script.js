let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


  const carousel = document.querySelector('.carousel');
  let counter = 0;

  function autoSlide() {
    counter++;
    if (counter >= carousel.children.length) {
      counter = 0;
    }
    updateCarousel();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${counter * 100}%)`;
  }

  setInterval(autoSlide, 5000);

var countDownDate = new Date("Sept 06, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var interval = countDownDate - now;

    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor(interval % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(interval % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(interval % (1000 * 60) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}, 1000);

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('src');
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});