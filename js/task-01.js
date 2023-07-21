const listEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listEl.length}`);

const categoryEl = document.querySelectorAll("#categories .item");

categoryEl.forEach((item) => {
  const categorTitel = item.querySelector("h2").textContent;
  const elItem = item.querySelectorAll("li").length;

  console.log(`Category:${categorTitel}`);
  console.log(`Elements: ${elItem}`);
});
