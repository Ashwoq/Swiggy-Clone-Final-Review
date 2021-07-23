window.onscroll = function () {
  if (document.getElementById("inter") !== null) {
    hide();
  }
};

function hide() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("inter").style.background = "white";
  } else {
    document.getElementById("inter").style.background = "#37718e";
  }
}
