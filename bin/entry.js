#! /usr/bin/env node

const package = require('../package.json');
const chalk = require('chalk');
const figlet = require('figlet');
const { Command } = require('commander');

const program = new Command()

program
  .version(`chaoxing-cli ${package.version}`, '-v, --version', 'display version for chaoxing-cli')
  .usage('<command> [options]')

program
  .option('-y, --yes', 'run default action')
  .option('-f, --force', 'force all the question')

program
  .command('create <project-name>')
  .description('create a new project')
  .option("-f, --force", "overwrite target directory if it exists")
  .action(function(projectName, options) {
    console.log(projectName, options);
  })

try {
  program.parse(process.argv)
} catch (e) {
  console.log(e)
}