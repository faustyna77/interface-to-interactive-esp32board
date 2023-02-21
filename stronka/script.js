let btnoff=document.querySelector(".button-off")
let btngo=document.querySelector(".button-go")
let btnleft=document.querySelector(".button-left")
let btnright=document.querySelector(".button-right")
let btnback=document.querySelector(".button-back")
let gora=document.querySelector(".gora")
let dol=document.querySelector(".dol")
let lewo=document.querySelector(".lewo")
let prawo=document.querySelector(".prawo")



const Up=()=>
{
     gora.src="photos/gora_niebieski.png"
}
const Down=()=>
{
    dol.src="photos/dol_niebieski.png"
}

const Left=()=>
{
    lewo.src="photos/lewo_niebieski.png"
}
const Right=()=>
{
    prawo.src="photos/prawo_niebieski.png"
}

btngo.addEventListener('click',Up)
btnleft.addEventListener('click',Left)
btnright.addEventListener('click',Right)
btnback.addEventListener('click',Down)