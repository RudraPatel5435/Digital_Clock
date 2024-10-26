let weeks = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday", 
    7: "Sunday"
}
let months = {
    1: "January",
    2: "Febuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}
setInterval(()=>{
    let curr = new Date()
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const day = curr.getDay()
    const week = weeks[curr.getDay()]
    const month = months[curr.getMonth()]
    const year = curr.getFullYear()
    const hour = curr.getHours()
    const min = curr.getMinutes()
    const sec = curr.getSeconds()
    
    var hours = document.querySelector("#hours")
    var minutes = document.querySelector("#minutes")
    var seconds = document.querySelector("#seconds")
    var date = document.querySelector("#date")
    var timeZonespan = document.querySelector("#timezone")
    
    hours.innerText = hour < 10 ? "0"+ hour : hour
    minutes.innerText = min < 10 ? "0"+ min : min
    seconds.innerText = sec < 10 ? "0"+ sec : sec
    date.innerText = `${day} ${month} ${year}`
    timeZonespan.innerText = timeZone

}, 1000)

let clock = document.querySelector(".clock")
let font1 = document.querySelector(".font1")
let font2 = document.querySelector(".font2")
let font3 = document.querySelector(".font3")
var timeall = document.getElementsByClassName("time")

font1.addEventListener("click", () => {
    date.style.fontFamily = "Digital Dream"
    timeZonespan.style.fontFamily = "Digital Dream"
    timeall.style.fontFamily = "Digital Dream"
})
font2.addEventListener("click", () => {
    date.style.fontFamily = "Square Sans Serif 7"
    timeZonespan.style.fontFamily = "Square Sans Serif"
    timeall.style.fontFamily = "Square Sans Serif"
})
font2.addEventListener("click", () => {
    date.style.fontFamily = "ClickClock"
    timeZonespan.style.fontFamily = "ClickClock"
    timeall.style.fontFamily = "ClickClock"
})
