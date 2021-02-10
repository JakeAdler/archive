import rimraf from 'rimraf';
import git from 'simple-git';
import dotenv from 'dotenv';
import plates from './plates.js';
import { madeDirs, devCleanup, } from './logs/logs';
    
dotenv.config();

export default (answers) => {
    const project_name = answers['project-name'];
    const project_type = answers['project-type'];
    const git_path = plates[project_type];
    git()
        .clone(git_path, `./${project_name}`)
        .exec(()=>{
            process.env.DEV ? 
            rimraf(`./${project_name}`, (err)=>{
                err ?
                console.log(err)
                :
                console.log(devCleanup(`./${project_name}`));
            })
            :
            rimraf(`./${project_name}/.git`, (err)=>{
                err ?
                console.log(err)
                :
                console.log(madeDirs(project_name));
            })
            
        });
};
