const schedule = require ("node-schedule")
const date = new Date(2024, 6, 30, 11, 24)
console.log(date);
schedule.scheduleJob(date, function(){
    console.log("Hello...");
})
schedule.scheduleJob(" 0 * * * * * ", function(){
    console.log("Hello...");
})

module.exports = {schedule}