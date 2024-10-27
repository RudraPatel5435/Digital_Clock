let weeks = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}
let months = {
    0: "January",
    1: "Febuary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}
var hours = document.querySelector("#hours")
var minutes = document.querySelector("#minutes")
var seconds = document.querySelector("#seconds")
var datespan = document.querySelector("#date")
var timeZonespan = document.querySelector("#timezone")
var dayspan = document.querySelector("#day")
var afterGood = document.querySelector("#afterGood")
setInterval(()=>{
    let curr = new Date()
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const day = weeks[curr.getDay()]
    const week = weeks[curr.getDay()]
    const month = months[curr.getMonth()]
    const year = curr.getFullYear()
    const hour = curr.getHours()
    const min = curr.getMinutes()
    const sec = curr.getSeconds()
    const date = curr.getDate()
    
    
    hours.innerText = hour < 10 ? "0"+ hour : hour
    minutes.innerText = min < 10 ? "0"+ min : min
    seconds.innerText = sec < 10 ? "0"+ sec : sec
    datespan.innerText = `${date} ${month} ${year}`
    timeZonespan.innerText = timeZone
    dayspan.innerText = `${day}`

    if (hour<12 || hour==24){
        afterGood.innerText = "Morning"
    }
    else if (hour>=12 && hour<17){
        afterGood.innerText = "Afternoon"
    }
    else if (hour>=17 && hour<24){
        afterGood.innerText = "Evening"
    }

}, 1000)

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.classList = "ri-close-fill"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.innerHTML = localStorage.getItem("data")
