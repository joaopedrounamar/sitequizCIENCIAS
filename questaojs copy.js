const certo = document.querySelector(".certo")
const botao1 = document.querySelector(".botao1")
const botao2 = document.querySelector(".botao2")
const botao3 = document.querySelector(".botao3")
const correct = new Audio("correct.mp3")
const click = new Audio("cxlick.mp3")
const proxima = document.querySelector(".proxima")
let clico = false

certo.addEventListener("click", async () => {
    if (clico === false) {
    clico = true
    click.play()
    botao1.style.color = "gray"
    botao2.style.color = "gray"
    botao3.style.color = "gray"
    certo.style.color = "green"
    document.body.style.backgroundColor = "green"
    correct.play()
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0.1
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0.15
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0.2
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0.2
        correct.play
    setTimeout(() => {
        correct.pause
        correct.currentTime = 0.2
        correct.play
    }, 5);
    }, 5);
    }, 5);
    }, 10);
    }, 25);
    }, 50);
    }, 100);
    }, 200);
    }, 500);

    localStorage.setItem("acertos", localStorage.getItem("acertos") + 1)

    setTimeout(() => {
        console.log("a");
      window.location.href = "fim.html"
    }, 2500);
}
})

botao1.addEventListener("click", () => {
      if (clico === false) {
    clico = true
    click.play()
    botao1.style.color = "blue"
    botao2.style.color = "gray"
    botao3.style.color = "gray"
    certo.style.color = "green"
        setTimeout(() => {
         window.location.href = "fim.html"
    }, 800);
}})

botao2.addEventListener("click", () => {
      if (clico === false) {
    clico = true
    click.play()
    botao1.style.color = "gray"
    botao2.style.color = "blue"
    botao3.style.color = "gray"
    certo.style.color = "green"
        setTimeout(() => {
         window.location.href = "fim.html"
    }, 800);
}})

botao3.addEventListener("click", () => {
      if (clico === false) {
    clico = true
    click.play()
    botao1.style.color = "gray"
    botao2.style.color = "gray"
    botao3.style.color = "blue"
    certo.style.color = "green"
        setTimeout(() => {
          window.location.href = "fim.html"
    }, 800);
}})