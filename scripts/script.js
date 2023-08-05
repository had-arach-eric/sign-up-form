const passwordUI = document.querySelector("#password");
const confirmPasswordUI = document.querySelector("#confirm-password");
const labelPasswordUI = document.querySelector("#password-label");
const incorrectPasswordUI = document.querySelector("#incorrect-password");

function handleCheckPasswords() {
  console.log(passwordUI.value);
  if (passwordUI.value !== "") {
    if (passwordUI.value === confirmPasswordUI.value) {
      passwordUI.style.border = "2px solid green";
      confirmPasswordUI.style.border = "2px solid green";
      incorrectPasswordUI.hidden = true;
    }
    else {
      passwordUI.style.border = "2px solid red";
      confirmPasswordUI.style.border = "2px solid red";
      incorrectPasswordUI.hidden = false;
    }
  }
}

function main() {
  passwordUI.addEventListener("input", handleCheckPasswords);
  confirmPasswordUI.addEventListener("input", handleCheckPasswords);
}

main();