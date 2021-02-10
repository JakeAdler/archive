"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rimraf = _interopRequireDefault(require("rimraf"));

var _simpleGit = _interopRequireDefault(require("simple-git"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _plates = _interopRequireDefault(require("./plates.js"));

var _logs = require("./logs/logs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = answers => {
  const project_name = answers['project-name'];
  const project_type = answers['project-type'];
  const git_path = _plates.default[project_type];
  (0, _simpleGit.default)().clone(git_path, `./${project_name}`).exec(() => {
    process.env.DEV ? (0, _rimraf.default)(`./${project_name}`, err => {
      err ? console.log(err) : console.log((0, _logs.devCleanup)(`./${project_name}`));
    }) : (0, _rimraf.default)(`./${project_name}/.git`, err => {
      err ? console.log(err) : console.log((0, _logs.madeDirs)(project_name));
    });
  });
};

exports.default = _default;