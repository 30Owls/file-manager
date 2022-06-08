import {fileURLToPath} from "url";
import {dirname} from "path";

// resolveCurrDir(import.meta.url)
function resolveCurrDir(metaUrl) {
  const __filename = fileURLToPath(metaUrl) //import.meta.url
  return dirname(__filename)
}

function resolveHomeDir(){
  
  return process.env.HOME || process.env.USERPROFILE;
  
}

export{
  resolveCurrDir,
  resolveHomeDir
}