'use strict'

const chalk = require('chalk')


const msgColors = {
    type: {
        'regular': {fg: chalk.white, bg: chalk.bgBlack },
        'err': { fg: chalk.white, bg: chalk.bgRed },
        'info': { fg: chalk.yellow, bg: chalk.bgBlue },
        'warn': { fg: chalk.red, bg: chalk.bgBlack },
        'green': { fg : chalk.green, bg: chalk.bgBlack },
        'red': { fg: chalk.red, bg: chalk.bgBlack }
    }
}

/**
 * 
 */
module.exports.pP =(msg, type='none') => {
   const color = msgColors.type[type]
   
   console.log( color.fg(color.bg((msg))) )
}