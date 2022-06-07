import readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import {getArgValue} from './helpers/parseArgs.js';
import {sayHi, sayBye} from './helpers/niceGuy.js';
import { commandListener } from './commands/index.js';
import { getCurrDir } from './helpers/path.js'


/*=====================================================*/
const currentState = {
    userName : '',
    currentDir: '',
    getUserName(){
        this.userName = getArgValue('--username')
    },
    getCurrentDir(){
        this.currentDir = getCurrDir()
    }
}
/*=====================================================*/


function main(){
    currentState.getUserName();

    const userInterface = readline.createInterface({
        input,
        output
    });

    process.stdout.write(`${sayHi(currentState.userName)}`);

    console.log(getCurrDir());

    userInterface.on('line', (line) => {
        if(line == '.exit'){
            process.stdout.write(`${sayBye(currentState.userName)}`);
            userInterface.close()
        }     
        commandListener(line)
    });

    userInterface.on('SIGINT', () => {
        process.stdout.write(`${sayBye(currentState.userName)}`);
        userInterface.close();
    });
    
}



main();