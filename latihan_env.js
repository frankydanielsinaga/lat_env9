require('dotenv').config()

console.log("HOST: " + process.env.DB_HOST);
console.log("USER: " + process.env.DB_USER);
console.log("PASS: " + process.env.DB_PASS);
console.log("NAME: " + process.env.DB_NAME);


var username = process.env.USERNAME;
var password = process.env.PASSWORD;

console.log("username anda: " + username);
console.log("password anda: " + password);

process.env.APP_VERSION = "9.99.99";
process.env.APP_NAME = "Kursus Backend Dilo";


console.log("variabel env sudah dibuat!");

console.log("APP_VERSION = " + process.env.APP_VERSION);
console.log("APP_NAME= " + process.env.APP_NAME);