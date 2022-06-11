import fs from 'fs';
import {existAsync} from '../helpers/existAsync.js'
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

/**
 * - Create empty file in current working directory: 
    ```bash
    add new_file_name
    ```
 * === Stream used for assignment points ===
 * @param {*} file - filename for file creation
 */

export const command_Add = async (file) => {
    try{
        let currentDir = currentState.currentDir;
        let fileToWrite = path.resolve(currentDir, file);
        let doesItEvenExist = await existAsync(fileToWrite);
        if(!(doesItEvenExist)){
            const stream = fs.createWriteStream(fileToWrite);
            stream.write('');
            stream.on("end", function() {
                stream.end();
            });
            stream.on('error', error => {throw new Error(errors.errOperation)}); 
        } else {
            throw new Error(errors.errOperation)
        }
    } catch (err) {
        throw new Error(errors.errOperation)
    }
}