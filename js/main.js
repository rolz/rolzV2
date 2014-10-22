
var video = document.getElementById('video');
var drawerState = false;
video.addEventListener('play', function() {
  console.log('showing video');
  video.style.opacity = 1;
});


// hidden content in and out
var hc = document.getElementById("hidden-container");
function openContent() {
  hc.className = "open";
};

function closeContent() {
  hc.className = "";
};

var hca = document.getElementById("hidden-container-about");
function openAboutContent() {
  hca.className = "open";
};

function closeAboutContent() {
  hca.className = "";
};