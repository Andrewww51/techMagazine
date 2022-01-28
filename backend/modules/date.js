function myDate() {
    let myDate = new Date()
    let currentYear = myDate.getFullYear()
    let currentMonth = ('0' + (myDate.getMonth()+1)).slice(-2)
    let currentDay = ('0' + myDate.getDate()).slice(-2)
    let currentHour = myDate.getHours()
    let currentMinutes = myDate.getMinutes()
    let currentSeconds = myDate.getSeconds()
    let currentDate = currentYear + "-" + 
                        currentMonth + "-" + 
                        currentDay/*  + "T" + 
                        currentHour + ":" + 
                        currentMinutes + ":" + 
                        currentSeconds + "Z" */
    return currentDate
}

exports.myDate = myDate