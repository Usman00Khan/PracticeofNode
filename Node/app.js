// var name = "Usman"
// function sayhello(name) {
// 	console.log('Hello ' + name); 
// }
// sayhello(name);
//sayhello(global.name);

// const Logger = require('./logger')
// const logger = new Logger();
// logger.addListener("MessageLogged",  (arr) => {
// 	global.console.log("Listener called",arr);
// })

// logger.log("Hii")

// const logger = require('./logger.js');
// logger("logger");

// const path = require("path")
// var p = path.parse(__filename)

// const os = require("os")
// free = os.freemem()
// total = os.totalmem()
// console.log(`Total Memory is ${total}\nFree Memory is ${free}`)

// const fs = require('fs')
// fs.readdir('./', function(err,files) {
// 	if (err) 
// 		console.log("Error")
// 	else 
// 		console.log(`Results:`,files)
// })

const http = require('http')
const server = http.createServer((req,res)=>{
	if (req.url==='/'){
		res.write("Hello Usman")
		res.end()
	}
	if (req.url === "/hi"){
		res.write(JSON.stringify([1,2,3])+ "\nHi if not Hello")
		res.end()
	}
})
server.on('connection',(socket) => {
	console.log("New Connection")
})
server.listen(3000);
console.log("Listening on port 3000")

