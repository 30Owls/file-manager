import { currentState } from '../state/index.js';
import errors from '../helpers/errors.js'
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const command_Cd = (currentDir, newDir) => {
   let newPath = '';
   let checkPath = path.isAbsolute(newDir);
   if(checkPath){
      newPath = path.join(newDir);
   } else {
      newPath = path.join(currentDir, newDir);
   }
   
   
   if (fs.existsSync(newPath)) {
      currentState.currentDir = newPath;
      return newPath;
  } else {
      console.log(errors.errOperation);
  }
}

