#!/usr/bin/env node
// externals
"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _yargs = require("yargs");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _questions = _interopRequireDefault(require("./questions"));

var _mkdirs = _interopRequireDefault(require("./mkdirs"));

var _logs = require("./logs/logs");

var _errors = require("./logs/errors");

var _plates = _interopRequireDefault(require("./plates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// internals
_dotenv.default.config();

(() => {
  try {
    // globals
    console.log(_logs.boiling);
    const argsLength = _yargs.argv._.length;
    const firstArg = _yargs.argv._[0];
    const secondArg = _yargs.argv._[1]; // run through questions

    const inquire = () => {
      _inquirer.default.prompt((0, _questions.default)()).then(answers => {
        console.log(_logs.copyPlates);
        (0, _mkdirs.default)(answers);
        console.log((0, _logs.successMadeDirs)(answers));
      }).catch(err => {
        throw err;
      });
    }; // checks args and directs flow in the proper direction.


    const checkArgs = () => {
      const firstArgValid = () => {
        const allPlates = Object.keys(_plates.default);

        if (allPlates.includes(firstArg)) {
          return true;
        } else {
          return false;
        }
      };

      if (argsLength === 0) {
        inquire();
      } else if (argsLength === 1) {
        if (firstArgValid()) {
          throw _errors.needName;
        } else {
          throw `${(0, _errors.firstArgInvalid)(firstArg)} \n${_errors.and}\n${_errors.needName}`;
        }
      } else if (argsLength === 2) {
        // second arg is validated by inquirer
        if (firstArgValid()) {
          const args = {
            'project-type': firstArg,
            'project-name': secondArg
          };
          (0, _mkdirs.default)(args);
        } else if (!firstArgValid()) {
          console.error((0, _errors.firstArgInvalid)(firstArg));
        }
      }
    };

    checkArgs();
  } catch (err) {
    console.log(err);
  }
})();