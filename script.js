const Open = document.getElementById("open");
const Close = document.getElementById("close");
const container = document.querySelector(".container");

Open.addEventListener("click", () => {
    container.classList.add("show-nav");
})

Close.addEventListener("click", () => {
    container.classList.remove("show-nav");
})