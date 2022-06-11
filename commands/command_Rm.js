import { EOL } from 'os';
import fs from 'fs';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

/**
 * - Delete file: 
    ```bash
    rm path_to_file
    ```
 * @param {*} fileName - path_to_file
 */

export const command_Rm = async (fileName) => {
    
    try {
        let currentDir = currentState.currentDir;
        // full dir with Filename
        let filePath = path.resolve(currentDir, fileName);

        fs.unlink(filePath, function (err) {
            if(err){
                console.log(errors.errOperation)
            }
        });
    } catch (err){
        console.log(errors.errOperation)
    }

}