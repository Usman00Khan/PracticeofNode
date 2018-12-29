const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Hi")
        res.end()
        console.log("New connection")
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5,6]))
        res.end()
    }
})
server.listen(3000)
setInterval(function() {global.process.stdout.write("Listening to port 3000. ")
    },
10000)