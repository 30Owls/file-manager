import { EOL } from 'os';
import fs from 'fs';
import { pipeline } from 'stream';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

/**
 * - Move file (same as copy but initial file is deleted): 
    ```bash
    mv path_to_file path_to_new_directory
    ```
 * === Stream used for assignment points === 
 * @param {*} pathToFile - path_to_file
 * @param {*} newDirPath - path_to_new_directory
 */

export const command_Mv = async (pathToFile, newDirPath) => {
    if(!(pathToFile && newDirPath)){
        throw new Error(errors.errOperation);
    }

    try{
        let currentDir = currentState.currentDir;

        // full dir with Original Filename
        let filePath = path.resolve(currentDir, pathToFile);
        // only Original Filename
        let fileName = path.basename(pathToFile);
        // only path to make a new file with Original filename there
        let newPath = path.resolve(currentDir, newDirPath, fileName);

        const origFile = fs.createReadStream(`${filePath}`, { encoding: 'utf8'});
        const newFile = fs.createWriteStream(`${newPath}`);
        origFile.on('end', () => {
            fs.unlink(`${filePath}`, function (err) {
                // if (err) throw err;
                if(err){
                    console.log(errors.errOperation)
                }
            });
        });
        
        pipeline(origFile, newFile, err => {
            if (err) {
              console.log(errors.errOperation);
            }
        });
    } catch (err) {
        throw new Error(errors.errOperation)
    }
}