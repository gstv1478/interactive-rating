const main = document.querySelector(".main")
const thank = document.querySelector(".thank")

const submitButton = document.getElementById("submit")

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
console.log(rates)


submitButton.addEventListener("click", () => {
    thank.classList.remove("hidden")
    main.style.display= "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
       rating.innerHTML = rate.innerHTML
    })
    
});