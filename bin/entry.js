#! /usr/bin/env node

const { Command } = require('commander')

const package = require('../package')

const program = new Command()
const chalk = require('chalk')
const Inquirer = require('inquirer')

new Inquirer.prompt([
  {
    name: "chaoxing",
    type: "checkbox",
    message: '选择你需要的依赖:',
    choices: [
      { name: 'TypeScript' },
      { name: 'Eslint' }
    ]
  }
]).then(res => {
  console.log(res);
})

program
  .name("chaoxing-cli")
  .version(package.version, '-v, --version', 'display version for chaoxing-cli')
  .usage('<command> [options]')

program.parse(process.argv)