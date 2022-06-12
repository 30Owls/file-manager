import { EOL } from 'os';
import fs from 'fs';
import { currentState } from '../state/index.js';
import errors from '../helpers/errors.js'
import path from 'path';

/**
 * - Read file and print it's content in console: 
    ```bash
    cat path_to_file
    ```
 * === Stream used for assignment points ===
 * @param {*} pathToFile - dir+filename to read content from
 */

export const command_Cat = async (pathToFile) => {
    
    try{
        let currentDir = currentState.currentDir;
        let newPath = '';
        //check if path to file is abslute or not
        let checkPath = path.isAbsolute(pathToFile);
        if(checkPath){
            newPath = path.join(pathToFile);
        } else {
            newPath = path.join(currentDir, pathToFile);
        }
        if (fs.existsSync(newPath)) {
            const aPath = path.resolve(newPath);
            let fileToRead = path.join(`${aPath}`);
            const stream = fs.createReadStream(fileToRead, 'utf-8');
            streamToPromise(stream);
            function streamToPromise(stream) {
                return new Promise(function(resolve, reject) {
                  stream.on('data', chunk => process.stdout.write(chunk + EOL));
                  stream.on("end", () => process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`));
                  stream.on('error', error => {throw new Error(errors.errOperation)}); 
                })
            }
        } else {
            throw new Error(errors.errOperation)
        }
    } catch (err) {
        throw new Error(errors.errOperation)
    }
};

