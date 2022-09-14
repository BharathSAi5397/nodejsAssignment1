const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(`${fileName}`,`${fileContent}`);
}
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return await fs.readFile(`./${fileName}.txt`,"utf-8")
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return await fs.appendFile(`${fileName}`,`${fileContent}`,err=>{
		console.log("file updfated")
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(`${fileName}`);
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }