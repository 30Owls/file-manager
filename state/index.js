import { getArgValue, resolveCurrDir, resolveHomeDir } from '../helpers/index.js'

export const currentState = {
    userName : '',
    currentDir: null,
    homeDir: null,
    getCurrentDir(){
        if (this.currentDir == null){
            this.currentDir = this.homeDir;
        }
        return this.currentDir;
    },
    getHomeDir(){
        if(this.homeDir == null){
            this.homeDir == setHomeDir()
        }
        return this.homeDir
    },
    setUserName(){
        this.userName = getArgValue('--username')
    },
    setCurrentDir(){
        this.currentDir = resolveCurrDir(import.meta.url);
        return this.currentDir
    },
    setHomeDir(){
        this.homeDir = resolveHomeDir();
        if (this.currentDir == null){
            this.currentDir = this.homeDir;
        }
        return this.homeDir;
    }
}
