const chalk = require('chalk');

const boiling = chalk.bgBlack.bold.underline.white('☕ ☕ ☕' + '  ' + 'boiling' + ' ' + '☕ ☕ ☕   ' + '\n'); 

const fetchingPlates = chalk.bgYellow.black('🚴 FETCHING ') + chalk.yellow(' checking for new boilerplates \n');

const copyPlates = chalk.bgYellow.black('\n ✏️  WRITING ') + chalk.yellow(' copying boilerplate \n');


const successMadeDirs = (answers) => chalk.bgGreen.black('👍  SUCCESS ') + chalk.green(' copied boilerplate ' + chalk.bold.green(answers['project-type']) +' at ') + chalk.bold.underline.green(`./${answers['project-name']} \n`);

const fetchedPlates = chalk.bgGreen.black('👍  SUCCESS ') + chalk.green(' fetched the latest boilerplates \n')

const madeDirs = (project_name) => chalk.bgGreen.black('SUCCESS: ') + chalk.bold.underline.white(`cd into ./ ${project_name} \n` );

const noNetwork = chalk.bgYellow('⚠️  '+ chalk.black('NO NETWORK DETECTED -- RUNNING IN OFFLINE MODE')+' ⚠️  ' + '\n'); 

// Dev logs

const devMode = chalk.bgYellow('⚠️  '+ chalk.black('DEV MODE')+' ⚠️  ' + '\n'); 

const devSuccess = chalk.bgGreen('👍  SUCCESS: ') + chalk.green(' copied boilerplate recursively \n');

const devCleanup = (output_path) => chalk.bgRgb(255,165,0)("🛀  CLEANUP: ") + chalk.rgb(255,165,0)(" rimraf'd the directory" + output_path + '\n');

const answersDev = (answers) => '🙋  ANSWERS FROM MKDIRS ' + JSON.stringify(answers, null, 2) + '\n'

export { boiling, copyPlates, successMadeDirs, fetchingPlates, fetchedPlates, madeDirs, noNetwork, devMode, devSuccess, devCleanup, answersDev };