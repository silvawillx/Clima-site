const key = "e1c8c127c2b5742bc1c1aa8ba1155866"


function putDataScreen(dados) {

    console.log(dados)
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-prevision").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-prevision").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
  
}


async function screechCity(city) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(responses => responses.json())

    putDataScreen(dados)
}

function clickButton() {
    let city = document.querySelector('.input-city').value

    screechCity(city)
}