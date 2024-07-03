let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".mssg-container");
let mssg = document.querySelector("#mssg");

let turnX = true; //player x, player y

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("i was clicked");
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    winner();
  });
});

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const displayWinner = (victory) => {
  mssg.innerHTML = `Congratulations, the winner is ${victory}`;
  disableBox();
};

const winner = () => {
  for (let pattern of winPatterns) {
    let posi1 = boxes[pattern[0]].innerText;
    let posi2 = boxes[pattern[1]].innerText;
    let posi3 = boxes[pattern[2]].innerText;

    if (posi1 != "" && posi2 != "" && posi3 != "") {
      if (posi1 == posi2 && posi2 == posi3) {
        console.log("winner is ", posi1);
        displayWinner(posi1);
      }
    }
  }
};

const enableBox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
const reset = () => {
  turnX = true;
  enableBox();
  box.innerText = "";
};

resetBtn.addEventListener("click", reset);
