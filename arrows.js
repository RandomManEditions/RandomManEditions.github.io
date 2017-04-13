$(document).keydown(function(e) {

  //left arrow
  if(e.which == 37){
    var newURL = document.getElementById('leftArrow').href;
    window.location.href = newURL;
  }
  //right arrow
  else if(e.which == 39){
    var newURL = document.getElementById('rightArrow').href;
    window.location.href = newURL;
  }
});