let navbar=document.querySelector(".wrap-1 .nav");

document.querySelector("#menu-btn").addEventListener("click",()=>{
       navbar.style.left="0";
});
document.querySelector("#close").addEventListener("click",()=>{
       navbar.style.left="-170%";
});