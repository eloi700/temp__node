/*----------------BUILT IN MODULES-------------*/
// HTTP Module

const http = require('http');

const server = http.createServer((req,res)=>{
    //parameter for request by client for info and response which will be sending back

    //console.log(req); //refresh the website localhost:5000 to see a bunch of info in the terminal

    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if (req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)