import { currentState } from '../state/index.js';
import { cmdSlplit  } from '../helpers/index.js'
import { EOL } from 'os';

import {command_Up} from './command_Up.js'
import {command_Cd} from './command_Cd.js'
import {command_Ls} from './command_Ls.js'

async function commandListener(input){
  switch (input[0]) {
    case ('.exit'):
      break;
    case ('up'):
      command_Up(currentState.getCurrentDir());
      break;
    case ('cd'):
      command_Cd(currentState.getCurrentDir(),input[1]);
      break;
    case ('ls'):
      let b = await command_Ls(currentState.getCurrentDir());
      return b
    default:
      return console.log('Invalid input')
  }
}


async function commandHandler(linecommand){
  let answerQ = await commandListener(cmdSlplit(linecommand));
  if( typeof answerQ === 'undefined' || answerQ === null ){
    return process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
  }
  console.log(answerQ)
  return process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
}

export {
    commandListener,
    commandHandler
}