import { currentState } from '../state/index.js';
import errors from '../helpers/errors.js'
import fs from 'fs';
import path from 'path';

/**
 * - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd path_to_directory
    ```
 * @param {*} currentDir - current directory
 * @param {*} newDir - new directory
 */

export const command_Cd = (currentDir, newDir) => {
   try{
      let newPath = '';
      let checkPath = path.isAbsolute(newDir);
      if(checkPath){
         newPath = path.join(newDir);
      } else {
         newPath = path.join(currentDir, newDir);
      }
      
      
      if (fs.existsSync(newPath)) {
         currentState.currentDir = newPath;
      } else {
            throw new Error(errors.errOperation);
      }
   } catch (err) {
      throw new Error(errors.errOperation);
   }
};

