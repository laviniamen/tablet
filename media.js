const form = document.querySelector("form")
const form = document.querySelector("h3")
const form = document.querySelector("h4")

form.addEventListener("submit",(e) => {e.proventDefault()

    const nome = form.inNome.value
    const nota1 = Number(form.inNota1.value)
    const nota2 = Number(form.inNota2.value)
    const media = (nota1 + nota2)/2
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`