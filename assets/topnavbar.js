$(document).ready(function () {
  if (document.querySelector(".chennai") !== null) {
    document.querySelector(".chennai").classList.add("opsie");
  }
});
function openlocation() {
  document.querySelector(".locationnav").classList.remove("hidden");
  document.getElementById("locationnav").style.width = "37%";
  document.querySelector(".overlay").classList.remove("hidden");
  // document.querySelector(".hidecarousel").classList.add("hidden");
  document.querySelector(".overlayinchennai").classList.remove("hidden");
}
function closeLocation() {
  document.getElementById("locationnav").style.width = "0%";
  document.querySelector(".locationnav").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
  // document.querySelector(".hidecarousel").classList.remove("hidden");
  document.querySelector(".overlayinchennai").classList.add("hidden");
}

function otpnav() {
  document.querySelector(".overlay2").classList.remove("hidden");
  document.querySelector(".sidesignupnav").classList.add("hidden");
  document.querySelector(".sidenav").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
}

//////////////////////////////////////////////////////////////////////////
function opensignin() {
  if (document.querySelector(".signin-component") !== null) {
    document.querySelector(".signin-component").classList.remove("hidden");
  }
  if (document.querySelector(".signin-overlay") !== null) {
    document.querySelector(".signin-overlay").classList.remove("hidden");
  }

  if (document.querySelector(".outer") !== null) {
    document.getElementById("helpouter").style.zIndex = 0;
  }
}
