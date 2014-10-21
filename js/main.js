
var video = document.getElementById('video');
var drawerState = false;
video.addEventListener('play', function() {
  console.log('showing video');
  video.style.opacity = 1;
});

// window.toggleDrawer = function(){
//   var box = document.getElementById("side-box");
//   var arrow = document.getElementById("arrow");
//   if(drawerState){
//     box.className = "closed";
//     arrow.className = "";
//   }else{
//     box.className = "open";
//     arrow.className = "rotated";
//   }

//   setTimeout(function(){
//     if(box.className == "open"){
//       box.className = box.className + " animation-complete";
//     }
//   }, 400);

//   drawerState = !drawerState;
// };

// open

var open = false;

function openContent() {
  var arrow = document.getElementById("arrow");
  var box = document.getElementById("box");
  var hc = document.getElementById("hidden-container");
  if (open) {
    arrow.className = "";
    box.className = "";
    hc.className = "";
  } else {
    console.log("yes");
    arrow.className = "rotated";
    box.className = "open";
    hc.className = "open";
  }

  open = !open;
};