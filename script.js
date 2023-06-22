let choice = 'black';

document.addEventListener("DOMContentLoaded", function(){
  createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
      let size = askSize();
      createBoard(size);
  })
})

function createBoard(size){
  let board = document.querySelector(".board");
  
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
      for(let i = 0; i < numDivs; i++){       
        let div = document.createElement("div");
        div.addEventListener("mouseover",function(){
          div.style.backgroundColor="black";
        })
        board.insertAdjacentElement("beforeend", div);
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

  