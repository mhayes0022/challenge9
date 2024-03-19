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
  return `# ${answers.title}

  license badge here

  ## Description
  ${answers.description}

  ## Table of contents:
  -[Installation](#installation)
  -[Usage Information](#usage)
  -[Contribution Guidelines](#contribution)
  -[Test Instructions](#test)
  -[License](#license)
  -[Questions?](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contributions}

  ## Test
  ${answers.test}

  ## License
  ${answers.license}

  ## Questions
  ${answers.username}
  Contact Me:
  ${answers.email}

`;
}

module.exports = generateMarkdown;
