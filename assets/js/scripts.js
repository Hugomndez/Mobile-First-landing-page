let time = document.querySelector("#time");
let time_print = new Date();
time.innerHTML = `${time_print.toLocaleString()}`;

let date = document.querySelector("#date");
let date_print = new Date();
date.innerHTML = `${date_print.toLocaleString()}`;