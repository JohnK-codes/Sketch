// NOT COMPLETED
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
      const names = ["size-btn", "reset-btn", "color-btn"];
      button.setAttribute("id", names[num]);
      const textNames = ["Size", "Reset", "Rainbow Mode"];
      button.textContent = textNames[num];
      buttonsNode.appendChild(button);
    }

    document.getElementById("size-btn").addEventListener("click", () => {
      let message = prompt("Choose a size between 1-100");
      if (message > 100 || message < 1 || Number.isNaN(message)) {
        return;
      }
      let newBoxes = document.querySelectorAll(".box");
      newBoxes.forEach((div) => {
        container.removeChild(div);
      });
      for (let i = 0; i < message ** 2; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "box");
        container.appendChild(div);
        div.style.height = ((500 / message) * 100) / 500 + "%";
        div.style.width = ((500 / message) * 100) / 500 + "%";
        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = "black";
        });
      }
    });
    document.getElementById("color-btn").addEventListener("click", () => {
      let colorBoxes = document.querySelectorAll(".box");
      colorBoxes.forEach((div) => {
        div.addEventListener("mouseover", () => {
          const rainbow = [
            "pink",
            "blue",
            "yellow",
            "green",
            "purple",
            "orange",
          ];
          div.style.backgroundColor =
            rainbow[Math.floor(Math.random() * rainbow.length)];
        });
      });
    });

    {
      //cheque soon
      boxes.forEach((div) => {
        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = "black";
        });
      });
    }
    document.getElementById("reset-btn").addEventListener("click", () => {
      boxes.forEach((div) => {
        div.style.backgroundColor = "white";
      });
      boxes.forEach((div) => {
        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = "black";
        });
      });
    });
  }

  buttonFunction();
}
drawingFunction();
