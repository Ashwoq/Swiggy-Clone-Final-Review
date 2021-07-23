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

function cpmodal(msg, status) {
  $("#modaldaw").modal("hide");
  document.getElementById("mdg").style.background =
    "linear-gradient(to top, rgb(71, 240, 71), rgb(4, 187, 4))";
  document.getElementById("mdg").style.border = "3px dashed white";
  $("#cl").on("click", function () {
    $("#modaldaw").modal("hide");
  });
  document.querySelector(".modal-body").textContent = msg;

  if (status === "invalid") {
    document.getElementById("mdg").style.background =
      "linear-gradient(to top, #fa5e5e, #ff4444)";
    document.getElementById("mdg").style.border = "2px dashed white";
    $("#modaldaw").modal("show");
    // setTimeout(function () {
    //   $("#modaldaw").fadeOut("slow", function () {
    //     $("modaldaw").modal("hide");
    //   });
    // }, 3000);
  }
  if (status === "valid") {
    document.getElementById("mdg").style.background =
      "linear-gradient(to top, rgb(71, 240, 71), rgb(4, 187, 4))";
    document.getElementById("mdg").style.border = "3px dashed white";
    $("#modaldaw").modal("show");
  }
}

function opnpay() {
  $("#payer").modal("show");
}
