function openContent(){var e=document.getElementById("arrow"),t=document.getElementById("box"),n=document.getElementById("hidden-container");if(open){e.className="";t.className="";n.className=""}else{console.log("yes");e.className="rotated";t.className="open";n.className="open"}open=!open}var video=document.getElementById("video"),drawerState=!1;video.addEventListener("play",function(){console.log("showing video");video.style.opacity=1});var open=!1;