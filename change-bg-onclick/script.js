const body = document.body;
const container = document.querySelector(".container");
const gradientName = document.querySelector(".gradient-name");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const gradients = [
  {
    name: "Paranoia",
    color1: "#ea52f8",
    color2: "#0066ff",
  },
  {
    name: "Lime",
    color1: "#799f0c",
    color2: "#ffe000",
  },
  {
    name: "Deep",
    color1: "#191165",
    color2: "#43c6ac",
  },
  {
    name: "Cheek",
    color1: "#ff886a",
    color2: "#fcf6cf",
  },
  {
    name: "Malibu",
    color1: "#2bc0e4",
    color2: "#eaecc6",
  },
  {
    name: "Neon",
    color1: "#8c366c",
    color2: "#6e64e7",
  },
  {
    name: "Diamante",
    color1: "#0f3443",
    color2: "#34e89e",
  },
  {
    name: "Pimp",
    color1: "#0f0c29",
    color2: "#302b63",
  },
  {
    name: "Mushroom",
    color1: "#603813",
    color2: "#b29f94",
  },
];

const createBoxes = () => {
  const numberOfBoxes = gradients.length;

  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("boxes");
    box.id = `box${i}`;
    box.innerHTML = `<small>${gradients[i].name}</small>`

    container.appendChild(box);

    addGradients(box, i);
    changeBackgroundOnClick(box, i);
  }
}

const addGradients = (boxEl, id) => {
  boxEl.style = `
  background-image: linear-gradient(
    135deg, 
    ${gradients[id].color1}, 
    ${gradients[id].color2}
    )`;
}

const changeBackgroundOnClick = (boxEl, id) => {
  boxEl.addEventListener("click", () => {
    body.style = `
    background-image: linear-gradient(
        135deg, 
        ${gradients[id].color1}, 
        ${gradients[id].color2}
        )`;

    //update the gradient data 
    gradientName.innerHTML = gradients[id].name;
    color1.innerHTML = gradients[id].color1;
    color2.innerHTML = gradients[id].color2;
  });
}

createBoxes();