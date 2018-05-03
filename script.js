let titleButton = document.querySelector(".title");
let description = document.querySelector(".description");

titleButton.addEventListener("click",() => {
    description.classList.toggle("--elapse");
    
});