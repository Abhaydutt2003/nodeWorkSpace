const http = require('http');
const port = 8000;
const fileSystem = require('fs');

const server = http.createServer(requestHandler);

server.listen(port, function (error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log("The server is running on port :", port);
});

function requestHandler(request, response) {
    console.log(request.url);
    response.writeHead(200, { "content-type": "text/html" });

    let filePath;

    switch (request.url) {
        case '/':
            filePath = "./index.html";
            break;

        case '/profile':
            filePath = "./profile.html";
            break;

        default:
            filePath = "./404.html";

    }

    fileSystem.readFile(filePath, function (error, data) {
        if (error) {
            console.log(error);
            return response.end('<h1>error</h1>');
        }
        return response.end(data);
    });

    // fileSystem.readFile('./index.html', function (error, data) {
    //     if (error) {
    //         console.log(error);
    //         return response.end('<h1>error</h1>');
    //     }
    //     return response.end(data);
    // });
    //response.end("<h1>Gotcha!</h1>");
}