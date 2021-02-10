#!/usr/bin/env node

// externals
import inquirer from 'inquirer';
import { argv } from 'yargs';
import dotenv from 'dotenv';

// internals
import questions from './questions';
import mkdirs from './mkdirs';
import { boiling, copyPlates, successMadeDirs } from './logs/logs';
import { needName, firstArgInvalid, and } from './logs/errors';
import plates from './plates';

dotenv.config();


(()=>{
    try {
        // globals
        console.log(boiling);
        const argsLength = argv._.length;
        const firstArg = argv._[0];
        const secondArg = argv._[1];
                
        // run through questions
        const inquire = () => {  
            inquirer.prompt(questions())
                .then((answers)=>{
                    console.log(copyPlates);
                    mkdirs(answers);
                    console.log(successMadeDirs(answers));
                })
                .catch((err)=>{
                    throw err;
                });
        };
        
        // checks args and directs flow in the proper direction.
        const checkArgs = () => {
            const firstArgValid = () => {
                const allPlates = Object.keys(plates);
                if (allPlates.includes(firstArg)) {
                    return true;
                } else {
                    return false;
                }
            };

            if (argsLength === 0){
                inquire();
            } else if (argsLength === 1) {
                if (firstArgValid()){
                    throw needName;
                } else {
                    throw `${firstArgInvalid(firstArg)} \n${and}\n${needName}`
                }  
            } else if (argsLength === 2) {
                // second arg is validated by inquirer
                if (firstArgValid()){
                    const args = {
                        'project-type': firstArg,
                        'project-name': secondArg
                    }
                    mkdirs(args);
                } else  if (!firstArgValid()) {
                    console.error(firstArgInvalid(firstArg));
                }
            }
        };
        checkArgs();
    } catch(err){
        console.log(err);
    }
    
})();
