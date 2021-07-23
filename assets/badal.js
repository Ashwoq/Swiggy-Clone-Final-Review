$(document).ready(function () {
  // $(document).on("scroll", onScroll);
});

function onScroll(event) {
  const badalh = [
    { heading: "Combos", id: "Combos" },
    { heading: "Thirst Quenchers", id: "Thirst" },
    { heading: "Soups", id: "Soups" },
    { heading: "From The Clay Oven", id: "Clay" },
    { heading: "Indian Starters", id: "Indian" },
    { heading: "Chinese Starters", id: "Chinese" },
    { heading: "Yogurt", id: "Salad" },
    { heading: "Just Curries Cakes", id: "Curries" },
    { heading: "Pulao", id: "Pulao" },
    { heading: "Biryani", id: "Biryani" },
    { heading: "Noodles", id: "Noodles" },
    { heading: "Breads", id: "Breads" },
    { heading: "Papad", id: "Papad" },
    { heading: "Desserts", id: "Desserts" },
  ];
  var scrollPos = $(document).scrollTop();
  // $("#menu-center a").each(function () {
  //   var currLink = $(this);
  //   var refElement = $(currLink.attr("href"));

  if (scrollPos >= 320 && scrollPos < 2107) {
    document.querySelector(".Combos").classList.add("active");
    document.querySelector(".Thirst").classList.remove("active");
  } else if (scrollPos >= 2107 && scrollPos < 2790) {
    document.querySelector(".Combos").classList.remove("active");
    document.querySelector(".Thirst").classList.add("active");
    document.querySelector(".Soups").classList.remove("active");
  } else if (scrollPos >= 2790 && scrollPos < 4654) {
    document.querySelector(".Thirst").classList.remove("active");
    document.querySelector(".Soups").classList.add("active");
    document.querySelector(".Clay").classList.remove("active");
  } else if (scrollPos >= 4654 && scrollPos < 5213) {
    document.querySelector(".Soups").classList.remove("active");
    document.querySelector(".Clay").classList.add("active");
    document.querySelector(".Indian").classList.remove("active");
  } else if (scrollPos >= 5213 && scrollPos < 6420) {
    document.querySelector(".Clay").classList.remove("active");
    document.querySelector(".Indian").classList.add("active");
    document.querySelector(".Chinese").classList.remove("active");
  } else if (scrollPos >= 6420 && scrollPos < 7109) {
    document.querySelector(".Indian").classList.remove("active");
    document.querySelector(".Chinese").classList.add("active");
    document.querySelector(".Salad").classList.remove("active");
  } else if (scrollPos >= 7109 && scrollPos < 7930) {
    document.querySelector(".Chinese").classList.remove("active");
    document.querySelector(".Salad").classList.add("active");
    document.querySelector(".Curries").classList.remove("active");
  } else if (scrollPos >= 7930 && scrollPos < 8749) {
    document.querySelector(".Salad").classList.remove("active");
    document.querySelector(".Curries").classList.add("active");
    document.querySelector(".Pulao").classList.remove("active");
  } else if (scrollPos >= 8749 && scrollPos < 10085) {
    document.querySelector(".Curries").classList.remove("active");
    document.querySelector(".Pulao").classList.add("active");
    document.querySelector(".Biryani").classList.remove("active");
  } else if (scrollPos >= 10085 && scrollPos < 11296) {
    document.querySelector(".Pulao").classList.remove("active");
    document.querySelector(".Biryani").classList.add("active");
    document.querySelector(".Noodles").classList.remove("active");
  } else if (scrollPos >= 11296 && scrollPos < 12675) {
    document.querySelector(".Biryani").classList.remove("active");
    document.querySelector(".Noodles").classList.add("active");
    document.querySelector(".Breads").classList.remove("active");
  } else if (scrollPos >= 12675 && scrollPos < 13235) {
    document.querySelector(".Noodles").classList.remove("active");
    document.querySelector(".Breads").classList.add("active");
    document.querySelector(".Papad").classList.remove("active");
  } else if (scrollPos >= 13235 && scrollPos < 13664) {
    document.querySelector(".Breads").classList.remove("active");
    document.querySelector(".Papad").classList.add("active");
    document.querySelector(".Desserts").classList.remove("active");
  } else if (scrollPos >= 13664 && scrollPos < 14000) {
    document.querySelector(".Papad").classList.remove("active");
    document.querySelector(".Desserts").classList.add("active");
  } else {
    for (let i = 0; i < badalh.length; i++) {
      document.querySelector("." + badalh[i].id).classList.remove("active");
    }
  }
  // });
}

function but() {
  document.querySelector(".accent").disabled = true;
}
/**function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#menu-center a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    console.log(scrollPos);
    if (scrollPos >= 320 && scrollPos < 2107) {
      console.log("320");
      document.querySelector(".mc").classList.add("active");
    }
    if (scrollPos >= 2107 && scrollPos < 3107) {
      console.log("3200");
      console.log($("#menu-center a").attr("href"));

      // document.querySelector(".mc").classList.add("active");
    }
    if (
      refElement.position() <= scrollPos &&
      refElement.position() + refElement.height() > scrollPos
    ) {
      $("#menu-center ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
 */
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

(function () {
  var indicator = $("#indicator");
  var counter = indicator.find("span");

  var win = jQuery(window);
  if (indicator.length) {
    var moveIndicator = debounce(function () {
      var viewportHeight = $(window).height();
      var documentHeight = $(document).height();
      var hasScrolled = $(window).scrollTop();

      var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
      indicator.css("top", percent + "%");
      // counter.html(Math.floor(percent) + "%" );
    }, 10);
  }

  win.on("resize scroll", moveIndicator);

  function debounce(func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
})();
