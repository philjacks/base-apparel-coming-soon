function validateEmail(emailField) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    input.classList.add("invalid");
    invalid.appendChild(alert);

    return false;
  } else if (!reg.test(emailField.value) == false) {
    input.innerHTML = "";
    input.classList.remove("invalid");
    invalid.removeChild(alert);
    return true;
  }
}

const input = document.querySelector("input");
const button = document.querySelector("button");
const invalid = document.querySelector("#alert");
const alert = document.createElement("p");

alert.textContent = `\u00A0\u00A0\u00A0\u00A0\u00A0 Please provide a valid email`;

button.addEventListener("click", (e) => {
  validateEmail(input);
});
