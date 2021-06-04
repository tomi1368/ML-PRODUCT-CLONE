let div = document.getElementById("info");
let p = document.createElement("p");
let hijo = div.appendChild(p);
hijo.innerHTML= `Electronica y Audio / iPad / Nuevo / 32gb`


const searchBtn = document.querySelector(".search-icon");
const form = document.querySelector(".nav-search")
const cancelBtn = document.querySelector(".cancel-btn")

cancelBtn.onclick = ()=>{
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    
  }


searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }

