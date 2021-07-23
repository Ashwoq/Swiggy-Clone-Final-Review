function closelogin() {
  if (document.querySelector(".loginclass") !== null) {
    document.querySelector(".loginclass").classList.add("hidden");
  }
  if (document.querySelector(".login-overlay") !== null) {
    document.querySelector(".login-overlay").classList.add("hidden");
  }
  if (document.getElementById("helpouter") !== null) {
    document.getElementById("helpouter").style.zIndex = 1;
  }
}

function opensigninFromLogin() {
  if (document.querySelector(".loginclass") !== null) {
    document.querySelector(".loginclass").classList.add("hidden");
  }
  if (document.querySelector(".login-overlay") !== null) {
    document.querySelector(".login-overlay").classList.add("hidden");
  }

  /************************************************************************/
  if (document.querySelector(".signin-component") !== null) {
    document.querySelector(".signin-component").classList.remove("hidden");
  }
  if (document.querySelector(".signin-overlay") !== null) {
    document.querySelector(".signin-overlay").classList.remove("hidden");
  }

  /************************************************************************/

  if (document.getElementById("helpouter") !== null) {
    document.getElementById("helpouter").style.zIndex = 0;
  }
}

function openingotp() {
  document.querySelector(".beforeotp").classList.add("hidden");
  document.querySelector(".enterotp").classList.remove("hidden");
}

function closingotp() {
  document.querySelector(".enterotp").classList.add("hidden");
  document.querySelector(".beforeotp").classList.remove("hidden");
}
