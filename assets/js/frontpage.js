mainScreen = document.getElementById("main-screen")

function updateContentHeight() {
  mainScreen.style.minHeight = (window.innerHeight - 1).toString() + "px";
  console.log("Height updated")
}

updateContentHeight();
window.onresize = updateContentHeight;
screen.orientation.onchange = updateContentHeight;
