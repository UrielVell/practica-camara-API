
let btnCamara = document.querySelector("#btn-camara")
let video = document.querySelector("#video")
let btnFoto = document.querySelector("#btn-foto")
let canvas = document.querySelector("#canvas")
let containerURL = document.querySelector("#container-data")
let dataURL = document.querySelector("#data-url")

btnCamara.addEventListener('click', async function(){
    let stream = null

    try {
        stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    } catch (error) {
        alert(error.message)
        return
    }

    video.srcObject = stream

    video.style.display = "block"
    btnCamara.style.display = "none"
    btnFoto.style.display = "block"
})

btnFoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height )
    let img_url = canvas.toDataURL('img/jpeg')

    dataURL.value = img_url
    containerURL.style.display = 'block'
})