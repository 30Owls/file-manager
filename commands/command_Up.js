import { currentState } from '../state/index.js';
import path from 'path';

/**
 * - Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)  
    ```bash
    up
    ```
 * @param {*} currentDir - current directory
 */


export const command_Up = (currentDir) => {
   try{
      let newPath = path.resolve(currentDir, '..');
      currentState.currentDir = newPath;
   } catch (err) {
      throw new Error(errors.errOperation)
   }
}

