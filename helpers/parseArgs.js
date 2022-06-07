function getArgByNum(argNum = 0){
    return process.argv[argNum];
};


function getArgValue(argName){
    let name = (process.argv).filter(name => 
        name.includes(argName)
    )
    if(name.length > 0){
        const value = name[0].substring(name[0].indexOf('=') + 1);
        return value;
    } else {
        return '404'
    }

    
};

export {
    getArgByNum,
    getArgValue
};