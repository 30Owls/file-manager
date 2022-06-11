import { EOL } from 'os';
import fs from 'fs';
import {existAsync} from '../helpers/existAsync.js'
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

/**
 * - Rename file: 
    ```bash
    rn path_to_file new_filename
    ```
 * ==== streams is not needed for this command===
 * Maksim Shylau — Today at 4:07 PM
 *  move - да, rename - нет
 * @param {*} pathToFile - path ro file for rename
 * @param {*} newFileName - new file name
 */

export const command_Rn = async (pathToFile, newFileName) => {
    if(pathToFile && newFileName){
        let currentDir = currentState.currentDir;
        // full dir with Filename
        let filePath = path.resolve(currentDir, pathToFile);
        // only path to make a file with new name there
        let workingPath = path.dirname(filePath)
        // full path to new file
        let newFile = path.resolve(workingPath, newFileName);
        let doesItEvenExist = await existAsync(newFile);
        if(!(doesItEvenExist)){
            try{
                fs.rename(filePath, newFile, (error) => {
                    if (error) {
                        throw new Error(errors.errOperation)
                    }
                });
            } catch (err) {
                throw new Error(errors.errOperation)
            }
        } else {
            throw new Error(errors.errOperation)
        }
    } else {
        throw new Error(errors.errOperation)
    }
    
    
    
}