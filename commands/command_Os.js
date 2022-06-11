import os from 'os';
import { EOL } from 'os';
import errors from '../helpers/errors.js';
import { currentState } from '../state/index.js';

export const command_Os = async (parameter) => {
    if(parameter[1]){
        switch (parameter.slice(2).toLowerCase()) {
            case ('eol'):
                process.stdout.write(`${JSON.stringify(os.EOL)}`);
                process.stdout.write(`${EOL}You are currently in ${currentState.currentDir}${EOL}`);
                break;
            default:
                console.log(errors.errInput)
                process.stdout.write(`${EOL}You are currently in ${currentState.currentDir}${EOL}`);
        }
    } else {
        console.log(errors.errInput);
        process.stdout.write(`${EOL}You are currently in ${currentState.currentDir}${EOL}`);
    }

    
}


/*
Operating system info (prints following information in console)
    - Get EOL (default system End-Of-Line)  
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)  
    ```bash
    os --cpus
    ```
    - Get home directory: 
    ```bash
    os --homedir
    ```
    - Get current *system user name* (Do not confuse with the username that is set when the application starts)  
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled  
    ```bash
    os --architecture
    ```
*/