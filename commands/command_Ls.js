import { EOL } from 'os';
import {readdir} from 'node:fs/promises';
import { currentState } from '../state/index.js';
import  errors  from '../helpers/errors.js'
import path from 'path';


export const command_Ls = async (p) => {
    const aPath = path.resolve(p);

    try {
        const files = await readdir(aPath);
        console.log(files)
        process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);

    } catch (err) {
        //throw new Error(err);
        console.log(errors.errOperation)
        process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
    }
   
}

// export const command_Ls = (path) => new Promise( (resolve) => {
//     fs.readdir(path, (err, files) => {
//         if (err) {
//             throw new Error('Operation failed');
//         }
//         resolve(files)
//     });
// }) 