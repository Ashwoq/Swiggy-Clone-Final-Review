function openlogin() {
  if (document.querySelector(".loginclass") !== null) {
    document.querySelector(".loginclass ").classList.remove("hidden");
  }
  if (document.querySelector(".login-component") !== null) {
    document.querySelector(".login-component").classList.remove("hidden");
  }
  if (document.querySelector(".login-overlay") !== null) {
    document.querySelector(".login-overlay").classList.remove("hidden");
  }
  if (document.getElementById("helpouter") !== null) {
    document.getElementById("helpouter").style.zIndex = 0;
  }
}
function closesignin() {
  if (document.querySelector(".signin-component") !== null) {
    document.querySelector(".signin-component").classList.add("hidden");
  }
  if (document.querySelector(".signin-overlay") !== null) {
    document.querySelector(".signin-overlay").classList.add("hidden");
  }
  if (document.getElementById("helpouter") !== null) {
    document.getElementById("helpouter").style.zIndex = 1;
  }
}

// function startupclosesignin() {
//   /*-------------------Startup------------------ */
//   document.querySelector(".opensigninStartup").classList.add("hidden");
//   /*-------------------Startup------------------ */
// }
