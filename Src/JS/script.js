$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable: false,
      });
});

//team cards

let firstTrainer = document.querySelector('#puchkov');
firstTrainer.onclick = function() {
  let cardBack1 = document.querySelector('#card-back1');
  cardBack1.style.display = block;
}