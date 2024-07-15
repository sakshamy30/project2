let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let para = document.querySelector(".para")

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let btnX = true;
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box has been clicked");
        if(btnX) {
            box.innerHTML = "X"
            btnX = false;
        }
        else {
            box.innerHTML = "O";
            btnX = true;
        }
        box.disabled = true;

        checkWinner();

        resetGame();
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                alert(`Player ${pos1} wins!`);
            }
        }
    }
}

const resetGame = () => {
    
}