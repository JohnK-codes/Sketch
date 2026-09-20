const container = document.querySelector(".container");
for (let i = 0; i < 16 ** 2; i++) {
  const divs = document.createElement("div");
  divs.setAttribute("class", "box");
  container.appendChild(divs);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
  });
});
