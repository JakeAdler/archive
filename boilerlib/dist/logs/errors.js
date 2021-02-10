"use strict";

const chalk = require('chalk');

const needName = `${chalk.bgRed('A name argument is required')} \n 
${chalk.bgYellow.black('Example :')} ${chalk.bold('boil crap newProjectDirectory')}`;

const firstArgInvalid = firstArg => chalk.bgRed(`'${chalk.underline.bold.white(firstArg)}' is not a boilerplate run ${chalk.green('boil -h')} or ${chalk.green('boil --help')} for more info`);

const and = `${chalk.underline.red(`AND`)}`;
module.exports = {
  needName,
  firstArgInvalid,
  and
};