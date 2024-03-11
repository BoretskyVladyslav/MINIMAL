document.addEventListener("DOMContentLoaded", function(){
    const burgerBtn = document.getElementById("burger");
    burgerBtn.addEventListener("click", function(){
        const header = document.querySelector("header");
        header.classList.toggle("open");
    });
});
