var http=require('http');
/*
function onRequest(request, response)
{
  console.log("A user made a request"+request.url);
  response.writeHead(200,{"Context-Type":"text/plain"});//200 successb 404 not found
  response.write("here is the data");
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server is running....");
*/
var  fs=require('fs');
function send404Response(response)
{
  response.writeHead(404,{"Content-Type":"text/plain"});
  response.write("404 not found");
  response.end();
}
function onRequest(request, response)
{
  if(request.method=='GET' && request.url=='/')
  {
    response.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./first.html").pipe(response);

  }
  else {
    send404Response(response);
  }
}
http.createServer(onRequest).listen(8888);
console.log("server is running....");
