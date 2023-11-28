

const key = "80b9c12fe03de693c920c885dd3f0756"

function colocardadosnatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".texto-unidade").innerHTML = dados.main.humidity + "%" + " de Umidade"
    document.querySelector(".imagem-previsao").src = `https://openweathermap.org/img/wn/${dado.weather[0].icon}.png`

}
async function buscarcidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocardadosnatela(dados)
}

function cliqueinobotao() {
    const cidade = document.querySelector(".input-city").value

    buscarcidade(cidade)
}
