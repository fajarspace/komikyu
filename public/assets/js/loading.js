var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

$(document).ready(function(){
    $(".btnn").click(function(e){
      $(this).addClass('loading').removeClass('btnn');
    });
    setTimeout(function(e){
      $('.loading').removeClass('loading').addClass('btnn')
    }, 5000);
  });