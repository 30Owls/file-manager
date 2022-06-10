import { EOL } from 'os';
import fs from 'fs';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

// cp path_to_file path_to_new_directory

export const command_Cp = async (pathToFile, cpPath) => {
    
    let currentDir = currentState.currentDir;
    // full dir with Filename
    let filePath = path.resolve(currentDir, pathToFile);
    //getFileName
    let fileName = path.basename(pathToFile);
    let newPath = path.resolve(currentDir, cpPath, fileName);


    fs.copyFile(filePath, newPath,
      fs.constants.COPYFILE_EXCL, (err) => {
        if (err) {
            console.log(errors.errOperation);
        }
        else {
            process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
        }
    });
}

