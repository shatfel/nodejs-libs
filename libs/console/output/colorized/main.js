'use strict'

const chakl = require('chakl')


const msgColors = [
    { type: 'regular', fg: 'white', bg: 'black'},
    { type: 'err', fg: 'white', bg: 'red'},
    { type: 'info', fg: 'yellow', bg: 'blue' },
    { type: 'warn', fg: 'red', bg: 'black' },
    { type: 'green', fg : 'green', bg: 'black' },
    { type: 'red', fg: 'red', bg: 'black' }
]

/**
 * 
 */
module.exports.pP =(msg, type='none') => {
   const color = msgColors.type[type]
   
   console.log(chakl.color.bg(chakl.color.fg(msg)))
}