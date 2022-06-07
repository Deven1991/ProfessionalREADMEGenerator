// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your Subject or Title?',
    name: 'title',
    validate: string => string.length > 0 ? true : 'Must enter a project title.'
},
{
    type: 'input',
    message: 'Provide a short description of your application.',
    name: 'description',
    validate: string => string.length >= 15 ? true : 'Must include a description longer than 15 characters'
},
{
    type: 'input',
    message: 'Describe how to install the application.',
    name: 'installation'
},
{
    type: 'input',
    message: 'How will this application be used? ',
    name: 'usage'
},
{
    type: 'input',
    message: 'Describe the purpose of this application and features of the application.',
    name: 'features'
},
{
    type: 'input',
    message: 'Link to the demo video.',
    name: 'demo'
},
{
    type: 'input',
    message: 'Include a screenshot of the working application.',
    name: 'imageURL',
},
{
    type: 'confirm',
    message: 'Include another screenshot?',
    name: 'secondimage',
},
{
    type: 'input',
    message:'Insert next screenshot url or path',
    name:'confirmsecondimage',
    when: response => response.secondimage === true,
},
{
    type: 'input',
    message: 'List your collaboraters, if any.',
    name: 'credits'
},
{
    type: 'checkbox',
    message: 'Do you want to include a license?',
    name: 'license',
    choices: ['MIT', 'Apache', 'IBM', 'None']
},
{
    type: 'input',
    message: 'Enter your github username',
    name: 'userName',
    //github usernames are min. 4 char. long
    validate: string => string.length >= 4 ? true : 'Your github username can not be less than 4 characters.'
},
{
    type: 'input',
    message: 'Provide your e-mail address: ',
    name: 'email',
    validate: string => string.length > 0 ? true : 'You must include an email'
},
{
    type: 'input',
    message: 'Provide your github ID:',
    name: 'createdBy'
}];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            //bc the second screenshot is a question and returns boolean i created an if else statement, if true a new img tag is created, else it is blank.
            if (response.secondimage === true) {
                response.confirmsecondimage = `<img src="${response.confirmsecondimage}" alt="screenshot of application"/>`
            } else {
                response.confirmsecondimage = "";
            }
            writeToFile(response)
        })
};

//this function writes the MD file 
function writeToFile(response) {
    fs.writeFile(`./${response.name}README-GeneratedVersion.md`, generateMarkdown(response), (err) => err ? console.error(err) : console.log('Success! MD file created'));
}

// Function call to initialize app
init();
