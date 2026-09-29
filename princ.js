const button = document.querySelector(".but")
const click = new Audio("cxlick.mp3")

button.addEventListener("click", () => {
    click.play()
    setTimeout(() => {
    console.log("começou")
    document.location.href = "questao1.html"
    }, 500);
})