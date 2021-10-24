'use strict'

const colorized = require('../main')

module.export.doTests = () => {
  ('regular', 'err', 'warn', 'info', 'green', 'red').forEach(_type => {
    colorized.pP('Test color type for (' + _type + '): ', _type)
})}