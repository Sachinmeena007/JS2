let digital=()=>{

setInterval(()=>{

let time=new Date()
let hours=time.getHours()
let minutes=time.getMinutes()
let second=time.getSeconds()


let show=document.querySelector("#show")

show.innerHTML=`${hours}:${minutes}:${second}:`


},1000)


}