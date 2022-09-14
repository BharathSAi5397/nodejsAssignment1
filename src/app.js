const crud = require('./index.js');
console.log(crud);
let abc=crud.myFileReader("output");
abc.then(data=>{
    console.log(data)
})
crud.myFileWriter("newFile","writing new data")
let bcd= crud.myFileUpdater("newfile","\n adding new line");
bcd.then(data =>{
    console.log("updated")
})
crud.myFileWriter("deleteFile","file for deleting data")
crud.myFileDeleter("deleteFile")