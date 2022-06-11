import { EOL } from 'os';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';

/**
 * - Compress file (using Brotli algorytm)  
    ```bash
    compress path_to_file path_to_destination
    ```
 *  === Stream used for assignment points ===
 * @param {*} pathToFile - path_to_file
 * @param {*} newDirPath - path_to_destination
 */

export const command_Compress = async (pathToFile, newDirPath) => {
    if(!(pathToFile && newDirPath)){
        console.log(errors.errOperation)
    }

    try{
        let currentDir = currentState.currentDir;

        // full dir with Original Filename
        let filePath = path.resolve(currentDir, pathToFile);
        // only Original Filename
        let fileName = path.basename(pathToFile);
        let compressedFileName = (fileName+".br")
        // only path to make a new file with Original filename there
        let newPath = path.resolve(currentDir, newDirPath, compressedFileName);

        const origFile = fs.createReadStream(`${filePath}`, { encoding: 'utf8'});
        const newFile = fs.createWriteStream(`${newPath}`);
        const brotli = zlib.createBrotliCompress();
        pipeline(origFile, brotli, newFile, err => {
            if (err) {
                console.log(errors.errOperation)

            }
        });
    } catch (err) {
        console.log(errors.errOperation)
    }
}