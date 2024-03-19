// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} license badge here

  ## Description
  ${answers.description}

  ## Table of Contents
  -[Installation Instruction](#installation)
  -[Usage Information](#usage)
  -[Contribution Guidelines](#contributions)
  -[Test Instructions](#test)
  -[License](#license)
  -[Questions?](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributions
  ${answers.contributions}

  ## Test
  ${answers.test}

  ## License
  ${answers.license}

  license link here

  ## Questions
  ${answers.username}
  Contact Me:
  ${answers.email}

`;
}

module.exports = generateMarkdown;
