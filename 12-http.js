const http = require('http');

const server = http.createServer( (req,res) => {
    if (req.url === '/') {
        res.end('Good morning mel')
    } else if (req.url === '/about') {
        res.end('Here is the page about melannrae')
    } else {
    res.end(`
    <h1>Oops!!!</h1>
<p>We can't seem to find the page you are looking for </p>
<a href = "/">back home</a>
    `)}
})

server.listen(5000)