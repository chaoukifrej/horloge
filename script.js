const secondDiv = document.querySelector(".sec")
const minutesDiv = document.querySelector(".min")
const hoursDiv = document.querySelector(".hr")


function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secDeg = ((seconds / 60) * 360)
    secondDiv.style.transform = `translate(-50%,-100%) rotate(${secDeg}deg`

    const minutes = now.getMinutes()
    const minDeg = ((minutes / 60) * 360) + ((seconds/60)*6)
    minutesDiv.style.transform = `translate(-50%,-100%) rotate(${minDeg}deg`

    const hours = now.getHours()
    const hrDeg = ((hours / 12) * 360) + ((minutes/60)*30)
    hoursDiv.style.transform = `translate(-50%,-100%) rotate(${hrDeg}deg`


}

setInterval(setDate, 1000)