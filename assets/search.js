$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    // document.querySelector(".srch-li").classList.add("hiden");
    $("#myList li").filter(function () {
      console.log(value);
      if (value !== "") {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        document.querySelector(".srch-li").classList.remove("hiden");
      }
    });
  });
});

function available() {
  document.querySelector(".srch-li").classList.toggle("hiden");
}

$(document).ready(function () {
  if (document.querySelector(".chennai") !== null) {
    document.querySelector(".chennai").classList.add("opsie");
  }
});
