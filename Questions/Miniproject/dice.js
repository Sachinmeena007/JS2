let roll=()=>{

let img=document.querySelector("#img")

let random=Math.floor(Math.random()*6+1);
img.setAttribute("src",`${random}.png`)

}
let anim=()=>{
    
    let sound = document.querySelector("#diceSound");
sound.currentTime = 0; 
    sound.play();

let img=document.querySelector("#img")

img.setAttribute("src",`dice-rol.gif`)
setTimeout(roll,500);

}