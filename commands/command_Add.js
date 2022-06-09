import { EOL } from 'os';
import fs from 'fs';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';


export const command_Add = async (file) => {
        let currentDir = currentState.currentDir;
        let fileToWrite = path.resolve(currentDir, file);
        fs.access(fileToWrite, function (error) {
            if (error) {
                const stream = fs.createWriteStream(fileToWrite);
                stream.write('');
                stream.on("end", function() {
                    
                    stream.end();
                    
                });
                process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
                stream.on('error', error => console.log(errors.errOperation)); 
            } else {
                console.log(errors.errOperation);
                process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
            }
        });
}