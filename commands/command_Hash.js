import crypto from 'crypto';
import { currentState } from '../state/index.js';
import path from 'path';
import fs from 'fs';
import  errors  from '../helpers/errors.js'

/**
 * - Calculate hash for file and print it into console  
    ```bash
    hash path_to_file
    ```
 *  === Stream used for assignment points ===
 * @param {*} file - path to file 
 */

export const command_Hash = async (file) => {
    try{
        let currentDir = currentState.currentDir;
        let fileToHash = path.resolve(currentDir, file)
        const sha256 = path => new Promise((resolve, reject) => {
            const hash = crypto.createHash('sha256')
            const rs = fs.createReadStream(path)
            rs.on('error', reject)
            rs.on('data', chunk => hash.update(chunk))
            rs.on('end', () => resolve(hash.digest('hex')))
        })
        
        sha256(fileToHash).then(hash => {
          console.log(hash)
        }).catch(err => {
            console.log(errors.errOperation)
        })
    } catch (err) {
        console.log(errors.errOperation)
    }
}