import {EOL} from 'os';

function sayHi(name){
    if (name == 404){
        return (`Welcome to the File Manager, stranger! ʘ‿ʘ ${EOL}`);
    }
    return (`Welcome to the File Manager, ${name}!${EOL}`);
}

function sayBye(name){
    if (name == 404){
        return (`Thank you for using File Manager, stranger! ʘ‿ʘ ${EOL}`);
    }
    return (`Thank you for using File Manager, ${name}!${EOL}`);
}

export {
    sayHi,
    sayBye
}