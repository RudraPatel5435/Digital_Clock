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
let curr = new Date()
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
let day = curr.getDay()
let week = weeks[curr.getDay()]
let month = months[curr.getMonth()]
let year = curr.getFullYear()
let hour = curr.getHours()
let min = curr.getMinutes()
let sec = curr.getSeconds()
