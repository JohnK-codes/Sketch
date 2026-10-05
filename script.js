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
    for (let num = 0; num < 4; num++) {
      const button = document.createElement("button");
      button.setAttribute("class", "btn");
      const names = ["size-btn", "reset-btn", "color-btn", "grid-btn"];
      button.setAttribute("id", names[num]);
      const textNames = ["Size", "Reset", "Rainbow Mode", "Grid off"];
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
          div.style.background = "black";
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
      let newBoxes = document.querySelectorAll(".box");
      newBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
          box.style.background = "black";
        });
      });
    }
    document.getElementById("reset-btn").addEventListener("click", () => {
      let newBoxes = document.querySelectorAll(".box");
      newBoxes.forEach((box) => {
        box.style.background =
          "radial-gradient(circle, rgba(148, 187, 233, 1) 100%)";
      });
    });
    let active = false;

    document.getElementById("grid-btn").addEventListener("click", () => {
      let newBoxes = document.querySelectorAll(".box");
      active = !active;
      if (active === false) {
        newBoxes.forEach((div) => {
          div.style.border = "none";
          document.getElementById("grid-btn").textContent = "Grid on";
        });
      } else {
        newBoxes.forEach((div) => {
          div.style.border = "0.01px solid black";
          document.getElementById("grid-btn").textContent = "Grid off";
        });
      }
    });
  }

  buttonFunction();
}
drawingFunction();
