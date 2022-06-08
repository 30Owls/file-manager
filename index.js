import { EOL } from 'os';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

import { sayHi, sayBye  } from './helpers/index.js'

import { commandListener } from './commands/index.js';

import { currentState } from './state/index.js';




function main(){
    currentState.setUserName();
    currentState.setHomeDir();

    const userInterface = readline.createInterface({
        input,
        output
    });

    process.stdout.write(`${sayHi(currentState.userName)}`);
    process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
    

    userInterface.on('line', (line) => {
        if(line == '.exit'){
            process.stdout.write(`${sayBye(currentState.userName)}`);
            userInterface.close()
        }
        commandListener(line)
        process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
    });

    userInterface.on('SIGINT', () => {
        process.stdout.write(`${sayBye(currentState.userName)}`);
        userInterface.close();
    });
    
}



main();