const inputEl = document.getElementById("name-input");
const formEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  formEl.textContent = inputValue ? inputValue : "Anonymous";
});
