'use strict'

const commandLineArgs = require('command-line-args')

// Commandline handling
const optionDefinitions = [
  { name: 'folder', alias: 'f', type: String }
]

const options = commandLineArgs(optionDefinitions)

// Add the path to your files
const folder = options.folder
// '/Users/$YourUsername/Downloads/customerdata';
console.log(`Given folder:${folder}`)
