const cron = require('node-cron');

cron.schedule("*/10 * * * * *", () => {
    console.log("logging every second " + new Date().getSeconds());
})