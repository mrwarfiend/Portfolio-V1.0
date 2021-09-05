// nav stuff

var hasChanged = 0;

window.addEventListener('scroll', function(){
  if (window.scrollY > 50){
    document.getElementById("nav").style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.getElementById('navUl').style.paddingTop = '10px';
  } else {
    document.getElementById("nav").style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.getElementById('navUl').style.paddingTop = '30px';
  }
});



// image zoom stuff


var isZoomed = 0;

function changeZoom(myImage) {
  if (isZoomed == 0){
    document.getElementById("imageZoom").src = myImage;
    document.getElementById("imageZoomBox").style.display = "block";
    isZoomed = 1;
  } else {
    document.getElementById("imageZoomBox").style.display = "none";
    isZoomed = 0;
  };
}
