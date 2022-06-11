import { EOL } from 'os';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

import { sayHi, sayBye, cmdSlplit } from './helpers/index.js'

import { commandListener } from './commands/index.js';

import { currentState } from './state/index.js';


(async  () => {
    currentState.setUserName();
    currentState.setHomeDir();

    const userInterface = readline.createInterface({
        input,
        output,
        prompt: ''
    });

    process.stdout.write(`${sayHi(currentState.userName)}`);
    process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
    
    try {
        userInterface.on('line', async (line) => {
            if(line == '.exit'){
                process.stdout.write(`${EOL}${sayBye(currentState.userName)}${EOL}`);
                userInterface.close()
            } else {
                await commandListener(cmdSlplit(line)).then(()=>{
                    process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
                })
            }
            
        })
    } catch (err) {
        console.log(err.message)
    }

    userInterface.on('error', function (error) {
        console.log('interface on error worked');
    });
    userInterface.on('uncaughtException', function (error) {
        console.log('interface on uncaughtException worked');
    });

    userInterface.on('SIGINT', () => {
        process.stdout.write(`${EOL}${sayBye(currentState.userName)}${EOL}`);
        userInterface.close();
    });

})();
