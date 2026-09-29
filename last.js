const acertos = document.querySelector(".acertos")
const but = document.querySelector(".but")

acertos.textContent = "Você acertou.. " + localStorage.getItem("acertos").length + " questões."

but.addEventListener("click", () => {
    localStorage.setItem("acertos", null)
    window.location.href = "index.html"
})