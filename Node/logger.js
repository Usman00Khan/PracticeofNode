// var x=1;
// console.log(__filename);
// console.log(__dirname);
var Event = require('events')

class Logger extends Event {

	log(message) {
	console.log(message);
	this.emit("MessageLogged",{id:1,url:'https://'});
	}	
}

module.exports = Logger;
