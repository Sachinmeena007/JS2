let set=()=>{

localStorage.setItem("Age",25)
localStorage.setItem("Name","Sachin")

location.reload
//location.href="index.html"
}

let show=document.querySelector("#show")
show.innerHTML=localStorage.getItem("Name")