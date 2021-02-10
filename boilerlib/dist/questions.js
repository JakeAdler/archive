"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plates = _interopRequireDefault(require("./plates.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const _choices = Object.keys(_plates.default);

  const questions = [{
    name: 'project-type',
    type: 'list',
    message: '🤷  What project template would you like to generate?',
    choices: _choices
  }, {
    name: 'project-name',
    type: 'input',
    message: '💬  Project name:',
    validate: function validate(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }];
  return questions;
};

exports.default = _default;