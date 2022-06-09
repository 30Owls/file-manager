import { currentState } from '../state/index.js';
import { EOL } from 'os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const command_Up = (currentDir) => {
   let newPath = path.join(currentDir, '..');
   currentState.currentDir = newPath;
   process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`)
}

