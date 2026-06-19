let boxes = document.querySelectorAll(".box");
let c = document.querySelector(".container");
let game = document.querySelector(".game");
let reset = document.querySelector("#reset");
let newgameb = document.querySelector("#new");
let msgc = document.querySelector(".msgcontainer");
let msgwin = document.querySelector("#win");

let turn0 = true;//xplayer , oplayer


const arr = [
    [0 , 1 , 2],
    [3 , 4 ,5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [0 , 4 , 8],
];

const disabledd = () => {
    for(box of boxes){
        box.disabled = true;
    }
}


const enabledd = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetb = () => {
    turn0= true;
    enabledd();
    msgc.classList.add("hide");

}

const showwinner = (po) => {
    msgwin.innerText = `congratulations winner is:  ${po}`;
    msgc.classList.remove("hide");
    disabledd();

}



const checkup = () =>{
    for(let pattern of arr){
        let p0 = boxes[pattern[0]].innerText;
        let p1 = boxes[pattern[1]].innerText;
        let p2 = boxes[pattern[2]].innerText;

        if(p0 != "" &&  p1 != "" &&  p2 != ""){
          if(p0 === p1 && p1 === p2){
            console.log("winner" , p0);
            showwinner(p0);
        }
    }
}
};

boxes.forEach((box) =>
{
    box.addEventListener("click" , () => {
        console.log("hello");
        if(turn0){
            box.innerText = "X";
            turn0 = false;
            box.style.color = "brown";
            
        }
        else{
            box.innerText = "O";
            turn0 = true;
            box.style.color = "yellow";
            
        }
        box.disabled = true;
        checkup();
    });
    
});

reset.addEventListener("click" , resetb);
newgameb.addEventListener("click" , resetb);