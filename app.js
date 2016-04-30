
var http = require('http');
var songs = require('./module');


http.createServer(function(request, response) {
response.writeHead(200, {"Content-type": "text/plain" });
// response.write(songs[Math.floor(Math.random()*songs.length)]);
response.write(songs[Math.random()*songs.length]);
response.end();
}).listen(8888);

//
// function add(num1,num2){
// for(var i=num1;i<=num2;i++){
//     for(var n=num1; n<=num2; n++){
//         console.log(i+" + "+ n + " = " + (i+n));
//
// }
// }
// }
//
// function sub(num1,num2){
// for(var i=num1;i<=num2;i++){
//     for(var n=num1; n<=num2; n++){
//         console.log(i+" - "+ n + " = " + (i-n));
//
// }
// }
// }
//
// function multi(num1,num2){
// for(var i=num1;i<=num2;i++){
//     for(var n=num1; n<=num2; n++){
//         console.log(i+" * "+n +" = " + (i*n));
//
// }
// }
// }
// function mod(num1,num2){
// for(var i=num1;i<=num2;i++){
//     for(var n=num1; n<=num2; n++){
//         console.log(i + " % " + n + " = " + (i%n));
//
// }
// }
// }
// var all=[add, sub, multi, mod];
//
// function execute(x,y){
//     all.forEach(function(operation){
//     operation(x,y);
// });
// }
// execute(1,3);
