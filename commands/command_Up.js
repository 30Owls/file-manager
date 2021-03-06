import { currentState } from '../state/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const command_Up = (currentDir) => {
   let newPath = path.join(currentDir, '..');
   currentState.currentDir = newPath;
   return newPath;
}

