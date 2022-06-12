import { readdir } from 'node:fs/promises';
import  errors  from '../helpers/errors.js'
import path from 'path';

/**
 * - List all files and folder in current directory and print it to console
    ```bash
    ls
    ```
 * @param {*} currendDir - passed from parent argument=current path
 * @param {*} lsDir - Optionally - if passed - check filelist in passed directory
 */

export const command_Ls = async (currendDir, lsDir=null) => {
    try {
        let aPath = undefined;
        if(lsDir !== null && lsDir !== undefined){
            aPath = path.resolve(currendDir, lsDir);
        } else {
            aPath = path.resolve(currendDir);
        }
        const files = await readdir(aPath);
        console.log(files)
    } catch (err) {
        throw new Error(errors.errOperation);
    }
}