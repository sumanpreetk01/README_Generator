// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type:'input',
    name: 'description',
    message: 'Please enter a description of your project.'
},{
    type:'input',
    name: 'installation',
    message: 'Please enter the installation instructions.'
},{
    type:'input',
    name: 'usage',
    message: 'Please enter the usage information.'
},{
    type:'input',
    name: 'contribution',
    message: 'What are the contribution guidelines for your project?'
},{
    type:'input',
    name: 'test',
    message: 'What are the test instructions?'
},{
    type:'list',
    name: 'license',
    message: 'Choose a license.',
    choices: ['Academic Free License v3.0', 'MIT', 'GNU General Public License v3.0','Mozilla Public License 2.0', "None"]
},{
    type:'input',
    name: 'username',
    message: 'What is your GitHub username?'
},{
    type:'input',
    name: 'email',
    message: 'What is your email address?'
}];

module.exports = questions