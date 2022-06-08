import { currentState } from '../state/index.js';

import {command_Up} from './command_Up.js'

function commandListener(input){
    switch (input) {
        case ('.exit'):
          break;
        case ('up'):
          command_Up(currentState.getCurrentDir());
          break;
        default:
          return console.log('Invalid input')
      }
}

export {
    commandListener
}