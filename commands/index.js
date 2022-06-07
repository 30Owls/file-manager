function commandListener(input){
    switch (input) {
        case ('.exit'):
          console.log('SIGINT HERE')
          break;
        default:
          return console.log('Invalid input')
      }
}

export {
    commandListener
}