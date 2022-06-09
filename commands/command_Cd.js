import { currentState } from '../state/index.js';
import { EOL } from 'os';
import errors from '../helpers/errors.js'
import fs from 'fs';
import path from 'path';

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
      process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
  } else {
      console.log(errors.errOperation);
      process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
  }
}

