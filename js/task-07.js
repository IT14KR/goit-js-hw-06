const fontSizeControle = document.getElementById("font-size-control");
const textChange = document.getElementById("text");

fontSizeControle.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  textChange.style.fontSize = `${fontSize}px`;
});
