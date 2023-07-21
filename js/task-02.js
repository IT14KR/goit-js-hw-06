const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parEl = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  parEl.appendChild(liEl);

  // console.log(liEl);
});
