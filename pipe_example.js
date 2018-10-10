const fs = require('fs');
const zlib = require('zlib');
//readOnlyStream
let readStream = fs.createReadStream(__dirname+'/files/greeting.txt',{encoding: 'utf8'});
readStream.on('data',function(chunk){
    console.log(chunk);
})


// writeOnlyStream
let writeStream = fs.createWriteStream(__dirname+'/files/greetings_copy.txt');
//pipe usage. Pipe is only applicable on readStream. 
readStream.pipe(writeStream);

//use zlip to compress files
let glib = zlib.createGzip();

let writeCompressedStream = fs.createWriteStream(__dirname+'/files/greetings_compressed.txt.gz');
//glib is both read and write stream.Notice the use of method chaining.(Technically called cascading)
readStream.pipe(glib).pipe(writeCompressedStream); 

