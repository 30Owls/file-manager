import { currentState } from '../state/index.js';
import { cmdSlplit  } from '../helpers/index.js'
import { EOL } from 'os';

import {command_Up} from './command_Up.js'
import {command_Cd} from './command_Cd.js'
import {command_Ls} from './command_Ls.js'
import {command_Cat} from './command_Cat.js'
import {command_Add} from './command_Add.js'
import { command_Rn } from './command_Rn.js';

async function commandListener(input){
  switch (input[0]) {
    case ('.exit'):
      break;
    case('cat'):
      command_Cat(input[1]);
      break;
    case ('up'):
      command_Up(currentState.getCurrentDir());
      break;
    case ('cd'):
      command_Cd(currentState.getCurrentDir(),input[1]);
      break;
    case ('ls'):
      command_Ls(currentState.getCurrentDir());
      break;
    case ('add'):
      command_Add(input[1]);
      break;
    case ('rn'):
      command_Rn(input[1],input[2])
      break;
    default:
      console.log('Invalid input')
      process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
  }
}

/*
  получаем команду из индекса, сплитим через smdSplit
  чтобы получить массив [команда, аргумент(если есть)]
  и передаем в свич-функцию commandListener
  если ответ будет undefined, например при команде up нам ответ не нужен,
  то просто кидаем сообщение о текущей директории
*/
async function commandHandler(linecommand){
  let answerQ = await commandListener(cmdSlplit(linecommand));
  if( typeof answerQ === 'undefined' || answerQ === null ){
    //return process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
    return;
  }
  //console.log(answerQ)
  //return process.stdout.write(`You are currently in ${currentState.currentDir}${EOL}`);
}

export {
    commandListener,
    commandHandler
}