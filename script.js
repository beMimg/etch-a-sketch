let choice = 'black';
const btnPopup = document.querySelector("#popup");
const board = document.querySelector(".board");
const btnSmall = document.querySelector("#small_density");
const btnMedium = document.querySelector("#medium_density");
const btnBig = document.querySelector("#big_density");
const btnErase = document.querySelector("#erase");
const btnClassic = document.querySelector("#classic_mode");

createBoard(16);

btnPopup.addEventListener("click", function(){
  let size = askSize();
  createBoard(size);
})

function createBoard(size){

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
      for(let i = 0; i < numDivs; i++){       
        let div = document.createElement("div");
        div.addEventListener("mouseover",function(){
          div.style.backgroundColor= choice;
        })
        board.append(div);
      }
}

function askSize(){
  let input = prompt("How many squares on the board?");
  
  if (input === ""){
    alert("Please insert a number.")
  }
  else if(input < 1 || input > 100){
    alert("Please provide a number between 1 and 100.")
  } 
  else{
    alert("Ready to play.")
    return input;
  }
}

btnSmall.addEventListener("click", function(){
  colorChoice("darkgrey");
})

btnMedium.addEventListener("click", function(){
  colorChoice("grey");
})

btnBig.addEventListener("click", function(){
  colorChoice("black");
})  

btnClassic.addEventListener("click", function(){
  colorChoice("black");
})

function colorChoice(newColorChoice){  
    choice = newColorChoice
}

btnErase.addEventListener("click", function(){
  eraseBoard();
})

function eraseBoard(){
  let boardChilds = document.querySelectorAll(".board div");
    for(let i = 0; i < boardChilds.length; i++){
      boardChilds[i].style.backgroundColor = "white";
    }  
}


