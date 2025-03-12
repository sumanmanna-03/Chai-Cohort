// const fs = require('fs'); // fs ko use karke hum kisi vi file ko read kar sakte ha

// console.log("Starting Program");

// const contents = fs.readFileSync('./hello.txt','utf-8'); // sync is blocking code

// console.log('File Reading Success', contents);

// console.log('End of program');
// this is a synchronous code


// /------------------------- Legacy code ----------------------------------------------
// ----- now the asyncronous code of the above code is ------
// This is reading file from a file

/*
const fs = require('fs');

console.log('Starting Program');

fs.readFile('../Machine Coding3/hello.txt', 'utf-8', function(err,content){
    if(err){
        console.log('Erroe in file reading',err);
    }
    else{
        console.log('File Reading Success', content);
        fs.writeFile('backup.txt',content,function(err,){
            if(err){
                console.log(`Error in writing backup.txt`,err);
            }
            else{
                fs.unlink('./hello.txt',function(e){
                if(e){
                    console.log('Error deleting file',e);
                }else{
                    console.log('File delete success');
                }
            })
            }
        })
    }
})


// This is callback hell

*/
// The above code is callback hell

// ------------- Modern code --------------
/*
const fsv2 = require('fs/promises')

fsv2.readFile('./hello.txt', 'utf-8')
.then((content) => fsv2.writeFile('backup.txt', content))
.then(() => fsv2.unlink('./hello.txt'))
.catch((e) => console.log('Error', e)) 

// this is the code of the above code using Promise
*/

// ************************************************

function readFileWithPromise(filepath, encoding){
    return new Promise((resolve,reject) => {

    })
}