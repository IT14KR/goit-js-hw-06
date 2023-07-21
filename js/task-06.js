const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", (event) => {
  const input = event.target;
  if (input.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
