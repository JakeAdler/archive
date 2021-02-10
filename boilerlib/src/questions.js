import plates from './plates.js';
export default () => {
  
  const _choices = Object.keys(plates);

  const questions = [
      {
        name: 'project-type',
        type: 'list',
        message: '🤷  What project template would you like to generate?',
        choices: _choices,
      },
      {
        name: 'project-name',
        type: 'input',
        message: '💬  Project name:',
        validate: function (input) {
          if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
          else return 'Project name may only include letters, numbers, underscores and hashes.';
        }
      }
    ];
  return questions;
}

