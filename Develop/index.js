// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', ],
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

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //let fileName = 'README.md';
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log(error);
    }
    else {
      console.log("README.md has been successfully generated")
    }
  })
};

// const answers = inquirer.prompt(questions)

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    //console.log('README is being written');
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


// function init() {
//   inquirer.prompt(questions)
//   .then((answers) => {
//     //console.log('README is being written');
//     console.log(answers);
//     fs.writeFileSync('README.md', JSON.stringify(answers, markdown, 2))
//     const markdown = generateMarkdown(answers);
//   })
//   .catch((error) => console.error(error))
// }