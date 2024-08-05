let boxes=document.querySelectorAll(".Box");//selects a group of elements
let result=document.getElementById("Result");
let reset=document.querySelector("Reset")
let turn=true;

const arr=[[0,1,2],[6,7,8],[3,4,5],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{//addEventlisten() allows us ti add mutliple events to a single button whereas onlcick only one
        if(turn)
            {
                box.innerText="X";
                turn=false;
            }
        else
        {
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;//this helps in disabling the button so we cannot use the same button again
        check();
    })
})

function winner(winner)
{
    result.innerText=`Congrats, ${winner} is winner`;
}

function disable()
{
    for( let box of boxes)
    {
        box.disabled=true;
    }
}

function check()
{
    for(pattern of arr)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1=== pos2 && pos2=== pos3)
            {
                winner(pos1);
                disable();
            }
        }
    }
}

const resetgame = ()=>{
    turn=true;
    for( let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }

}

reset.addEventListener("click",resetgame);