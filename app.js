const navList = document.querySelector(".nav-list");
const barsBtn = document.querySelector(".bars-btn");
const closeBtn = document.querySelector(".close-btn");

barsBtn.addEventListener("click", function(){
    if(!navList.classList.contains("show-menu")){
        navList.classList.add("show-menu")
    }
    barsBtn.classList.add("hide-bars");
    closeBtn.classList.add("show-close");
})

closeBtn.addEventListener("click", function(){
    if(navList.classList.contains("show-menu")){
        navList.classList.remove("show-menu")
    }
    barsBtn.classList.remove("hide-bars");
    closeBtn.classList.remove("show-close");
})