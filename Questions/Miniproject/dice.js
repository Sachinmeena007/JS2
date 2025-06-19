let roll=()=>{

let img=document.querySelector("#img")

let random=Math.floor(Math.random()*6+1);
img.setAttribute("src",`${random}.png`)

}
let anim=()=>{
    setTimeout(roll,500);
let img=document.querySelector("#img")

img.setAttribute("src",`dice-rol.gif`)

}