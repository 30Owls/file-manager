import { EOL } from 'os';
import fs from 'fs';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

// mv path_to_file path_to_new_directory

export const command_Mv = async (pathToFile, newDirPath) => {
    // if(!(pathToFile && newDirPath)){
    //     throw new Error(errors.errOperation);
    // }

    try{
        let currentDir = currentState.currentDir;

        // full dir with Filename
        let filePath = path.resolve(currentDir, pathToFile);
        // only filename
        let fileName = path.basename(pathToFile);
        // only path to make a file with new name there
        let newPath = path.resolve(currentDir, newDirPath, fileName);
    
        fs.rename(filePath, newPath, (error) => {
            if (error) {
                throw new Error(errors.errOperation)
            }
        });
    } catch (err) {
        throw new Error(errors.errOperation)
    }
}