import { EOL } from 'os';
import fs from 'fs';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';


export const command_Rn = async (pathToFile, newFileName) => {
    
    let currentDir = currentState.currentDir;
    // full dir with Filename
    let filePath = path.resolve(currentDir, pathToFile);
    // only path to make a file with new name there
    let workingPath = path.dirname(filePath)
    // full path to new file
    let newFile = path.resolve(workingPath, newFileName);

    fs.rename(filePath, newFile, (error) => {
        if (error) {
            console.log(errors.errOperation);
        }
        else {
            process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
        }
    });
}