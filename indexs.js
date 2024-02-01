const sidebars=document.querySelector(".sidbar");
const menu=document.querySelector(".menu");
const cancel=document.querySelector(".cancel");
menu.addEventListener("click",(e)=>{
    e.preventDefault();
    sidebars.classList.add("active");
    sidebars.classList.remove("inactive");
    // sidebars.style.display="flex";
});
cancel.addEventListener("click",(e)=>{
    e.preventDefault();
    sidebars.classList.add("inactive");
    sidebars.classList.remove("active");
});