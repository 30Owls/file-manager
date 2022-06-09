import {readdir} from 'node:fs/promises';
import  errors  from '../helpers/errors.js'
import path from 'path';


export const command_Ls = async (p) => {
//   fs.readdir(path, (err, files) => {
//        if (err) {
//            throw new Error('Operation failed');
//        }
//         return files
//    })
    const aPath = path.resolve(p);

    try {
        const files = await readdir(aPath);
        return files

    } catch (err) {
        console.log(errors.errOperation)
        // throw new Error(errors.errOperation);
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