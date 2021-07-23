// const { element } = require("protractor");

// function openLoginNav() {
//   document.querySelector(".overlay2").classList.remove("hidden");
//   document.querySelector(".beforeotp").classList.remove("hidden");
//   document.querySelector(".sidesignupnav").classList.add("hidden");
//   document.querySelector(".sidenav").classList.remove("hidden");
//   document.querySelector(".overlay").classList.remove("hidden");
// }

// function closeLoginNav() {
//   document.querySelector(".sidenav").classList.add("hidden");
//   document.querySelector(".overlay").classList.add("hidden");
//   document.querySelector(".overlay2").classList.add("hidden");
// }

// function opensignNav() {
//   document.querySelector(".sidenav").classList.add("hidden");
//   document.querySelector(".overlay2").classList.remove("hidden");
//   document.querySelector(".sidesignupnav").classList.remove("hidden");
//   document.querySelector(".overlay").classList.remove("hidden");
// }

// function closesignNav() {
//   document.querySelector(".sidesignupnav").classList.add("hidden");
//   document.querySelector(".overlay").classList.add("hidden");
//   document.querySelector(".overlay2").classList.add("hidden");
// }

// function directopenNav() {
//   document.getElementById("mySidenav").style.width = "0%";
//   document.querySelector(".sidesignupnav").classList.add("hidden");
//   document.querySelector(".sidenav").classList.remove("hidden");
//   document.querySelector(".beforeotp").classList.remove("hidden");
//   document.getElementById("mySidenav").style.width = "37%";
//   document.querySelector(".overlay").classList.remove("hidden");
// }

// function directopensignNav() {
//   document.querySelector(".sidesignupnav").classList.remove("hidden");
//   document.querySelector(".overlay").classList.remove("hidden");
// }

// function otpnav() {
//   document.querySelector(".overlay2").classList.remove("hidden");
//   document.querySelector(".sidesignupnav").classList.add("hidden");
//   document.querySelector(".sidenav").classList.remove("hidden");
//   document.querySelector(".overlay").classList.remove("hidden");
// }

// function openotp() {
//   document.querySelector(".beforeotp").classList.add("hidden");
//   document.querySelector(".enterotp").classList.remove("hidden");
// }

// function closeotp() {
//   document.querySelector(".beforeotp").classList.remove("hidden");
//   document.querySelector(".enterotp").classList.add("hidden");
// }
// function openlocation() {
//   document.querySelector(".locationnav").classList.remove("hidden");
//   document.getElementById("locationnav").style.width = "37%";
//   document.querySelector(".overlay").classList.remove("hidden");
//   document.querySelector(".hidecarousel").classList.add("hidden");
//   document.querySelector(".overlayinchennai").classList.remove("hidden");
// }
// function closeLocation() {
//   document.getElementById("locationnav").style.width = "0%";
//   document.querySelector(".locationnav").classList.add("hidden");
//   document.querySelector(".overlay").classList.add("hidden");
//   document.querySelector(".hidecarousel").classList.remove("hidden");
//   document.querySelector(".overlayinchennai").classList.add("hidden");
// }
function opsie() {
  document.querySelector(".chennai").classList.add("opsie");
}

function help() {
  document.getElementById("spl").textContent = "Help";
  document.getElementById("state").textContent = "";
}
function openlgl() {
  if (document.getElementById("lgl").style.height === "125px") {
    document.querySelector(".lgl-term-explain").classList.remove("hidden");
    document.querySelector(".hrl").classList.add("hidden");
    document.querySelector(".lwn").classList.add("down");
    document.getElementById("lgl").style.height = "305px";
    document.getElementById("left-text").style.fontWeight = "bold";
  } else {
    document.querySelector(".lgl-term-explain").classList.add("hidden");
    document.querySelector(".hrl").classList.remove("hidden");
    document.querySelector(".lwn").classList.remove("down");
    document.getElementById("lgl").style.height = "125px";
  }
}
function openplc() {
  if (document.getElementById("pgl").style.height === "56px") {
    document.querySelector(".pcy-term-explain").classList.remove("hidden");
    document.querySelector(".hrp").classList.add("hidden");
    document.querySelector(".pwn").classList.add("down");

    document.getElementById("pgl").style.height = "305px";
  } else {
    document.querySelector(".pcy-term-explain").classList.add("hidden");
    document.querySelector(".hrp").classList.remove("hidden");
    document.querySelector(".pwn").classList.remove("down");

    document.getElementById("pgl").style.height = "56px";
  }
}
function opencar() {
  if (document.getElementById("car").style.height === "56px") {
    document.querySelector(".car-term-explain").classList.remove("hidden");
    document.querySelector(".hrc").classList.add("hidden");
    document.querySelector(".rwn").classList.add("down");

    document.getElementById("car").style.height = "425px";
  } else {
    document.querySelector(".car-term-explain").classList.add("hidden");
    document.querySelector(".hrc").classList.remove("hidden");
    document.querySelector(".rwn").classList.remove("down");

    document.getElementById("car").style.height = "56px";
  }
}
function openasr() {
  if (document.getElementById("asr").style.height === "56px") {
    document.querySelector(".asr-term-explain").classList.remove("hidden");
    document.querySelector(".hra").classList.add("hidden");
    document.querySelector(".awn").classList.add("down");

    document.getElementById("asr").style.height = "425px";
  } else {
    document.querySelector(".asr-term-explain").classList.add("hidden");
    document.querySelector(".hra").classList.remove("hidden");
    document.querySelector(".awn").classList.remove("down");

    document.getElementById("asr").style.height = "56px";
  }
}
function str() {
  document.querySelector(".str").classList.add("hidden");
}
function CopyMe(TextToCopy) {
  let TempText = document.createElement("input");
  TempText.value = TextToCopy;
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand("copy");
  document.body.removeChild(TempText);

  // alert("Copied the text: " + TempText.value);
}

/* //
/*
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 41,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  });

  // Custom Button
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".customPreviousBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

$(function () {
  $("#quick").hover(
    function () {
      $("#cardhide").css("display", "contents"),
        $("#cardhide").slideDown("slow");
    },
    function () {
      $("#cardhide").css("display", "");
    }
  );
});

*/
// function opensigninStartup() {
//   document.querySelector(".opensigninStartup").classList.remove("hidden");
//   document.querySelector(".openloginStartup").classList.add("hidden");
// }

// function openloginStartup() {
//   document.querySelector(".openloginStartup").classList.remove("hidden");
//   document.querySelector(".opensigninStartup").classList.add("hidden");
// }

// function openloginStartup() {
//   if (document.querySelector(".loginclass") !== null) {
//     document.querySelector(".loginclass ").classList.remove("hidden");
//   }
//   if (document.querySelector(".login-component") !== null) {
//     document.querySelector(".login-component").classList.remove("hidden");
//   }
//   if (document.querySelector(".login-overlay") !== null) {
//     document.querySelector(".login-overlay").classList.remove("hidden");
//   }
// }

// function openingotp() {
//   if (document.querySelector(".beforeotp") !== null) {
//     document.querySelector(".beforeotp").classList.add("hidden");
//   }
//   if (document.querySelector(".enterotp") !== null) {
//     document.querySelector(".enterotp").classList.remove("hidden");
//   }
// }

// function closingotp() {
//   if (document.querySelector(".beforeotp") !== null) {
//     document.querySelector(".beforeotp").classList.remove("hidden");
//   }
//   if (document.querySelector(".enterotp") !== null) {
//     document.querySelector(".enterotp").classList.add("hidden");
//   }
// }

// function openloginStartup() {
//   opensigninStartup();

//   if (document.querySelector(".login-component") !== null) {
//     document.querySelector(".login-component").classList.remove("hidden");
//   }
// }
