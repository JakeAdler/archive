"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.answersDev = exports.devCleanup = exports.devSuccess = exports.devMode = exports.noNetwork = exports.madeDirs = exports.fetchedPlates = exports.fetchingPlates = exports.successMadeDirs = exports.copyPlates = exports.boiling = void 0;

const chalk = require('chalk');

const boiling = chalk.bgBlack.bold.underline.white('☕ ☕ ☕' + '  ' + 'boiling' + ' ' + '☕ ☕ ☕   ' + '\n');
exports.boiling = boiling;
const fetchingPlates = chalk.bgYellow.black('🚴 FETCHING ') + chalk.yellow(' checking for new boilerplates \n');
exports.fetchingPlates = fetchingPlates;
const copyPlates = chalk.bgYellow.black('\n ✏️  WRITING ') + chalk.yellow(' copying boilerplate \n');
exports.copyPlates = copyPlates;

const successMadeDirs = answers => chalk.bgGreen.black('👍  SUCCESS ') + chalk.green(' copied boilerplate ' + chalk.bold.green(answers['project-type']) + ' at ') + chalk.bold.underline.green(`./${answers['project-name']} \n`);

exports.successMadeDirs = successMadeDirs;
const fetchedPlates = chalk.bgGreen.black('👍  SUCCESS ') + chalk.green(' fetched the latest boilerplates \n');
exports.fetchedPlates = fetchedPlates;

const madeDirs = project_name => chalk.bgGreen.black('SUCCESS: ') + chalk.bold.underline.white(`cd into ./ ${project_name} \n`);

exports.madeDirs = madeDirs;
const noNetwork = chalk.bgYellow('⚠️  ' + chalk.black('NO NETWORK DETECTED -- RUNNING IN OFFLINE MODE') + ' ⚠️  ' + '\n'); // Dev logs

exports.noNetwork = noNetwork;
const devMode = chalk.bgYellow('⚠️  ' + chalk.black('DEV MODE') + ' ⚠️  ' + '\n');
exports.devMode = devMode;
const devSuccess = chalk.bgGreen('👍  SUCCESS: ') + chalk.green(' copied boilerplate recursively \n');
exports.devSuccess = devSuccess;

const devCleanup = output_path => chalk.bgRgb(255, 165, 0)("🛀  CLEANUP: ") + chalk.rgb(255, 165, 0)(" rimraf'd the directory" + output_path + '\n');

exports.devCleanup = devCleanup;

const answersDev = answers => '🙋  ANSWERS FROM MKDIRS ' + JSON.stringify(answers, null, 2) + '\n';

exports.answersDev = answersDev;