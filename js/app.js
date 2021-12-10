function nightMode(input){
  var element = document.body;
  element.classList.toggle("lightmode");
  console.log(input.getAttribute('src'));


  if(input.getAttribute('src') == "../Icons/sunpixel.png"){
    input.src = "../Icons/moonpixel.png";
  } else{
    input.src ="../Icons/sunpixel.png";
  }
  
  
}