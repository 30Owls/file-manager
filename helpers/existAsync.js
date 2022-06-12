import fs from 'fs';

/**
 * 
 * @param {*} filePath - path to check if file\path exist
 * @returns 
 */

export const existAsync= function (filePath) {
    return new Promise(function (resolve) {
      fs.access(filePath,fs.constants.F_OK,function (err) {
        if(!err)
        {
          resolve(1);
        }
        else
        {
          resolve(0);
        }
      })
    })
  }