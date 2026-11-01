const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Request logging
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Backend Development Fundamentals Lab 1 Server!');
    } else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            name: "B. Nandavardhan Sai Kumar",
            registrationNumber: "5020",
            section: "II"
        }));
    } else if (req.method === 'GET' && req.url === '/time') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            currentTime: new Date().toISOString()
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: "Not Found",
            message: "This route does not exist."
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Plain HTTP server is running at http://localhost:${PORT}`);
});
