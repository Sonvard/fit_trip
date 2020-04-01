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

var modal = document.getElementById('windowModal');
var link = document.getElementById("trainerLink");
var span = document.getElementsByClassName("close");


window.onclick = function(event) {
  console.log(event.target);
  if (event.target == modal || event.target.className == "close") {
    modal.style.display = "none";

    cols = document.getElementsByClassName("modal-content");
    for(var i = 0; i < cols.length; i++)
    {
      cols[i].classList.add('nodisplay');
    }
  }  
};

function showModal(x) {
  console.log(x);
  modal.style.display = "block";
  document.getElementById("traner_"+x).classList.remove('nodisplay');
}
