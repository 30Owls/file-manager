import { currentState } from '../state/index.js';

import  errors  from '../helpers/errors.js'
import {command_Up} from './command_Up.js'
import {command_Cd} from './command_Cd.js'
import {command_Ls} from './command_Ls.js'
import {command_Cat} from './command_Cat.js'
import {command_Add} from './command_Add.js'
import { command_Rn } from './command_Rn.js';
import { command_Cp } from './command_Cp.js';
import { command_Mv } from './command_Mv.js';
import { command_Rm } from './command_Rm.js';
import { command_Os } from './command_Os.js';
import { command_Hash } from './command_Hash.js';

async function commandListener(input){
  try{
    switch (input[0].toLowerCase()) {
      case ('.exit'):
        break;
      case('cat'):
        await command_Cat(input[1]);
        break;
      case ('up'):
        await command_Up(currentState.getCurrentDir());
        break;
      case ('cd'):
        await command_Cd(currentState.getCurrentDir(),input[1]);
        break;
      case ('ls'):
        await command_Ls(currentState.getCurrentDir(),input[1]);
        break;
      case ('add'):
        await command_Add(input[1]);
        break;
      case ('rn'):
        await command_Rn(input[1],input[2])
        break;
      case ('cp'):
        await command_Cp(input[1],input[2])
        break;
      case ('mv'):
        await command_Mv(input[1],input[2])
        break;
      case ('rm'):
        await command_Rm(input[1])
        break;
      case ('os'):
        await command_Os(input)
        break;
      case ('hash'):
        await command_Hash(input[1])
        break;
      default:
        console.log('Invalid input')
    }
  } catch (err){
    console.log(errors.errOperation);
  }
}


export {
    commandListener
}