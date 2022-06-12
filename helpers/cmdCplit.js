export const cmdSlplit = (command) => {
    let res = command.trim().split(" ");
    let newArr = [];
    if (Array.isArray(res)){
        return res;
    } else {     
        return newArr.push(res)
    }
    
 }