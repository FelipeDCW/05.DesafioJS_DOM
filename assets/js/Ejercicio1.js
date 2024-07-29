let btnregistrar = document.querySelector(`#botton`)
const reletras = new RegExp(`^[a-zA-Z]+$`)
/* btnregistrar.addEventListener(`click`,function(){

})
 */

btnregistrar.addEventListener(`click`, function () {
    let txtnombre = document.querySelector(`#nombre`)
    let txtasunto = document.querySelector(`#asunto`)
    let txtmensaje = document.querySelector(`#mensaje`)

    if (reletras.test(txtnombre.value) && reletras.test(txtasunto.value) && reletras.test(txtmensaje.value)) {
        let msgexitoso = document.querySelector(`#mensajesexitoso`)
        /* msgexitoso.innerHTML = `Mensaje enviado` */
        msgexitoso.innerHTML = `<div class="colorverde">Mensaje enviado</div>`
        console.log(`cumple`)
    }
    if (!reletras.test(txtnombre.value)) {
        let msgerrornombre = document.querySelector(`.errorNombre`)
        msgerrornombre.innerHTML = `El nombre es requerido`
    }
    else {
        let msgerrornombre = document.querySelector(`.errorNombre`)
        msgerrornombre.innerHTML = ``
    }

    if (!reletras.test(txtmensaje.value)) {
        let msgerrormensaje = document.querySelector(`.errorMensaje`)
        msgerrormensaje.innerHTML = `El mensaje es requerido`
    }
    else {
        let msgerrormensaje = document.querySelector(`.errorMensaje`)
        msgerrormensaje.innerHTML = ``
    }
    if (!reletras.test(txtasunto.value)) {
        let msgerrorasunto = document.querySelector(`.errorAsunto`)
        msgerrorasunto.innerHTML = `El asunto es requerido`
    }
    else {
        let msgerrorasunto = document.querySelector(`.errorAsunto`)
        msgerrorasunto.innerHTML = ``

    }


})