function opensigninStartup() {
  if (document.querySelector(".opensigninStartup") !== null) {
    document.querySelector(".opensigninStartup").classList.remove("hidden");
  }
  if (document.querySelector(".signin-overlay") !== null) {
    document.querySelector(".signin-overlay").classList.remove("hidden");
  }
}
$(document).ready(function () {
  console.log("strt");
  $("#startupin").on("keyup", function () {
    console.log("smtrt");

    var value = $(this).val().toLowerCase();
    document.querySelector(".srh-li").classList.add("liden");
    $("#startuplt li").filter(function () {
      console.log(value);
      if (value !== "") {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        document.querySelector(".srh-li").classList.remove("liden");
      }
    });
  });
});
