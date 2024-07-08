import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

await fs.writeFile("Text.text","hello manoj");

const data=await fs.readFile("Text.text");
console.log(data.toString());

const basepath="C:\\Users\\Manoj\\OneDrive\\Desktop\\Udemy JS\\Node.js\\Files\\Exercise _15";
const file=await fs.readdir(basepath);

for(let f of file){
    let ext=f.split(".")[f.split(".").length-1];
    if(ext!="json" && ext!="js" && f.split(".").length>1){
        if(fsn.existsSync(ext)){
            await fs.rename(path.join(basepath,f),path.join(basepath,ext,f));
        }else{
            await fs.mkdir(ext);
            await fs.rename(path.join(basepath,f),path.join(basepath,ext,f));
        }
    } 
}