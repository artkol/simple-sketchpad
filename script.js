const wrapper = document.querySelector(".grid");
const resetButton = document.querySelector(".reset");

let gridInput = 16;
wrapper.style["grid-template-columns"] = `repeat(${gridInput}, 1fr)`;

const hoverEffect = e => {
  document.querySelectorAll(".cell").forEach(element => {
    element.addEventListener("mouseover", e => {
      e.target.style.background = "#1f1";
    });
  });
};

const createGrid = gridInput => {
  for (let i = 0; i < Math.pow(gridInput, 2); i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    wrapper.appendChild(div);
  }
};

resetButton.addEventListener("click", () => {
  gridInput = prompt("new size?", 12);
  wrapper.innerHTML = "";
  wrapper.style["grid-template-columns"] = `repeat(${gridInput}, 1fr)`;
  createGrid(gridInput);
  hoverEffect();
});

createGrid(gridInput);
hoverEffect();
