import chalk from 'chalk';

const initLog = (rawFirstArg, outputPath) => (
    chalk.bgMagenta(`Batch converting files in ${chalk.bold.underline.black(rawFirstArg)}`) + '\n \n' + chalk.bgMagenta(`Outputting at ${chalk.bold.underline.black(outputPath)}`)+ '\n \n'
)

const imageSizeLog = (oldSize, newSize) => chalk.green(`Original image size : ${chalk.underline.green(`${oldSize/1000000.0}MB`)} ---> New image size: ${chalk.underline.green(`${newSize/1000000.0}MB`)}`);

const largeFilesWarning = (size) => `${chalk.bgYellow.black("WARNING:")} The total image size is ${size/1000000.0}MB, this process might take longer than 10s`

const otherFileSuccess = chalk.green('Success copying other files');

 
export {initLog, imageSizeLog, otherFileSuccess, largeFilesWarning}