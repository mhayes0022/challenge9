// Packages needed for this application:
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Below are the questions you are prompted to ask when running the application
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a brief description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for the project?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What are the contribution guidelines for the project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the testing instructions for the project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license would you like to include?',
      choices: ['Apache License 2.0', 'Boost Software License 1.0' ,'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
     },
];

  
// Below is a function to write a README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log(error);
    }
    else {
      console.log("README.md has been successfully generated")
    }
  })
};


// Below is a function to initialize the app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
  
    console.log(answers);
    return generateMarkdown(answers);
  })
  .then(answers => {
    writeToFile('README.md', answers);
    console.log('README has been successfully written')
  })
  .catch((error) => console.error(error))
}


// Function call to initialize app
init();
