import fs from 'fs';
import {existAsync} from '../helpers/existAsync.js'
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';
import { pipeline } from 'stream';

/**
 * - Copy file: 
    ```bash
    cp path_to_file path_to_new_directory
    ```
 * === Stream used for assignment points ===
 * @param {*} pathToFile - path to file need to be copied
 * @param {*} cpPath - new directory for file copy
 */

export const command_Cp = async (pathToFile, cpPath) => {
    
    if(pathToFile && cpPath){
        
        try{
            let currentDir = currentState.currentDir;
            // full dir with Filename
            let fileToCopy = path.resolve(currentDir, pathToFile);
            // getFileName
            let oldFile = path.basename(fileToCopy);
            // get new dir with filename
            let newFile = path.resolve(currentDir , cpPath, oldFile);
            

            let oldFExist = await existAsync(fileToCopy);
            if(oldFExist){

                const fileRead = fs.createReadStream(`${fileToCopy}`, { encoding: 'utf8'});

                const fileWrite = fs.createWriteStream(`${newFile}`);

                pipeline(fileRead, fileWrite, err => {
                    if (err) {
                      console.log(errors.errOperation);
                    }
                  });
            } else {
                throw new Error(errors.errOperation)
            }
        } catch (err) {
            throw new Error(errors.errOperation)
        }

    } else {
        throw new Error(errors.errOperation)
    }
}

