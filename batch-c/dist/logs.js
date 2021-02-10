"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.largeFilesWarning = exports.otherFileSuccess = exports.imageSizeLog = exports.initLog = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initLog = (rawFirstArg, outputPath) => _chalk.default.bgMagenta(`Batch converting files in ${_chalk.default.bold.underline.black(rawFirstArg)}`) + '\n \n' + _chalk.default.bgMagenta(`Outputting at ${_chalk.default.bold.underline.black(outputPath)}`) + '\n \n';

exports.initLog = initLog;

const imageSizeLog = (oldSize, newSize) => _chalk.default.green(`Original image size : ${_chalk.default.underline.green(`${oldSize / 1000000.0}MB`)} ---> New image size: ${_chalk.default.underline.green(`${newSize / 1000000.0}MB`)}`);

exports.imageSizeLog = imageSizeLog;

const largeFilesWarning = size => `${_chalk.default.bgYellow.black("WARNING:")} The total image size is ${size / 1000000.0}MB, this process might take longer than 10s`;

exports.largeFilesWarning = largeFilesWarning;

const otherFileSuccess = _chalk.default.green('Success copying other files');

exports.otherFileSuccess = otherFileSuccess;