let valor1 = document.querySelector(`#valor1`)
let valor2 = document.querySelector(`#valor2`)
let suma = document.querySelector(`#btn-sumar`)
let resta = document.querySelector(`#btn-restar`)
suma.addEventListener(`click`,function(){
    document.querySelector(`.resultado`).innerHTML= parseInt(valor1.value) + parseInt(valor2.value)
})
resta.addEventListener(`click`,function(){
    document.querySelector(`.resultado`).innerHTML= parseInt(valor1.value) - parseInt(valor2.value)
})
