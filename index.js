// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require("./utils/questions")



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>{
    fs.writeFileSync('newREADME.md', generateMarkdown(response))
    })
    
}

// Function call to initialize app
init();
