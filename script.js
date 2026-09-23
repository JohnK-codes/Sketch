const container = document.querySelector(".container");
for (let i = 0; i < 16 ** 2; i++) {
  const divs = document.createElement("div");
  divs.setAttribute("class", "box");
  container.appendChild(divs);
}

const boxes = document.querySelectorAll(".box");
function drawingFunction() {
  function buttonFunction() {
    const buttonsNode = document.querySelector(".buttons");
    for (let num = 0; num < 3; num++) {
      const button = document.createElement("button");
      button.setAttribute("class", "btn");
      const names = ["color-btn", "selector-btn", "reset-btn"];
      button.setAttribute("id", names[num]);
      const textNames = ["Color", "Size", "Reset"];
      button.textContent = textNames[num];
      buttonsNode.appendChild(button);
    }
  }
  boxes.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
  });
  buttonFunction();
}
drawingFunction();
