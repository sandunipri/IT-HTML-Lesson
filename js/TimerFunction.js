console.log("Timer Function JS loaded");

const timeoutID = setTimeout(() => {
    console.log("Hello World");
}, 5000);

clearTimeout(timeoutID);

const interval = setInterval(() => {
    console.log("hey there");
}, 1000);

clearInterval(interval);

