
document.getElementById("cambiarModo").addEventListener("click",cambiarModo)
let temaActual=localStorage.getItem("tema")
let body=document.querySelector(".body")
let img= document.getElementById("modoIcono")
if (temaActual=="oscuro") {
    body.classList.add("modo-oscuro") 
}

function cambiarModo () {   
    body.classList.toggle("modo-oscuro")

    if (body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema","oscuro") 
        img.src="../imagenes/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
    }
    else {
        localStorage.setItem("tema","claro")
        img.src="../imagenes/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
}

}

