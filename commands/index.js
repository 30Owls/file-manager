import { currentState } from '../state/index.js';

import {command_Up} from './command_Up.js'
import {command_Cd} from './command_Cd.js'

function commandListener(input){
  switch (input[0]) {
    case ('.exit'):
      break;
    case ('up'):
      command_Up(currentState.getCurrentDir());
      break;
    case ('cd'):
      command_Cd(currentState.getCurrentDir(),input[1]);
      break;
    default:
      return console.log('Invalid input')
  }
}

export {
    commandListener
}