import fs from "fs"

//Asynchronous
// fs.writeFile("hello1.txt","Hello I am manoj vaishnav",()=>{
//     console.log("file is writing");
// })
// fs.readFile("hello1.txt",(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     } 
// });
// fs.appendFile("hello1.txt"," I am a software engineer",()=>{
//     console.log("text appended");
// });

//Synchronous
fs.writeFileSync("hello2.txt","This is hello2");
const data=fs.readFileSync("hello2.txt");
console.log(data.toString());
fs.appendFileSync("hello2.txt"," welcome");

//promise to tackle from callback hell
import fsa from "fs/promises"

await fsa.writeFile("hello3.txt","This is hello3");
const a=await fsa.readFile("hello3.txt")
console.log(a.toString());
await fsa.appendFile("hello3.txt"," welcome");

//more module
import path from "path"
console.log(path);
const mypath="C:\\Users\\Manoj\\OneDrive\\Desktop\\Udemy JS\\Node.js\\Files\\hello3.txt"
console.log(path.dirname(mypath));
console.log(path.basename(mypath));