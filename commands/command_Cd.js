import { currentState } from '../state/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const command_Cd = (currentDir, newDir) => {
   let newPath = path.join(currentDir, newDir);
   console.log(newPath)
   currentState.currentDir = newPath;
   return newPath;
}

