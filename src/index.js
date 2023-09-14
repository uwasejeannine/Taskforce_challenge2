const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password")

function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid"); 
}

function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}


form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  checkEmail();
  createPass();

  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});