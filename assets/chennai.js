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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.querySelector(".fixed-sub-navbar") !== null) {
    if (
      document.body.scrollTop > 380 ||
      document.documentElement.scrollTop > 380
    ) {
      document.querySelector(".fixed-sub-navbar").classList.add("hidden");
      document.getElementById("navbar").style.top = "0px";
    } else {
      document.getElementById("navbar").style.top = "-1000px";
      document.querySelector(".fixed-sub-navbar").classList.remove("hidden");
    }
  }
}

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
