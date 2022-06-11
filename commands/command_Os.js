import os from 'os';
import { EOL } from 'os';
import errors from '../helpers/errors.js';


/**
 * Operating system info: os --PARAMETER
 * @param {*} parameter 
 */

export const command_Os = async (parameter) => {
    if(parameter[1]){
        let param = parameter[1].slice(2).toLowerCase();
        switch (param) {
            // Get EOL (default system End-Of-Line)
            case ('eol'):
                process.stdout.write(`${JSON.stringify(os.EOL)}`);
                break;
            // Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
            case ('cpus'):
                let cpu_s = await os.cpus()
                cpu_s.forEach((element, index) => { 
                    console.log(`--- CPU ${index} ---${EOL}Model: ${element.model}${EOL}Speed: ${element.speed / 1000} GHz${EOL}`)
                });
            // Get home directory
            case ('homedir'):
                console.log(os.userInfo().homedir)
                break;
            // Get current *system user name*
            case ('username'):
                console.log(os.userInfo().username)
                break;
            // Get CPU architecture for which Node.js binary has compiled
            case ('architecture'):
                console.log(os.arch())
                break;
            default:
                console.log(errors.errInput)
        }
    } else {
        console.log(errors.errInput);
    }
}