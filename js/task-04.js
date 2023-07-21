const counterValue = document.getElementById("value");
let startValue = 0;

function changeValue(value) {
  counterValue.textContent = value;
}

document
  .querySelector(`[data-action="decrement"]`)
  .addEventListener("click", () => {
    startValue -= 1;
    changeValue(startValue);
  });

document
  .querySelector(`[data-action="increment"]`)
  .addEventListener("click", () => {
    startValue += 1;
    changeValue(startValue);
  });
