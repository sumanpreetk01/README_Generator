// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
  case "Academic Free License v3.0":
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    break;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
      case "GNU General Public License v3.0":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        break;
      case "Mozilla Public License 2.0":
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
          break;
  default:
    return ``
    break;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Academic Free License v3.0":
      return `https://opensource.org/license/afl-3-0-php/`
      break;
      case "MIT":
        return `https://opensource.org/license/mit/`
        break;
        case "GNU General Public License v3.0":
          return `https://www.gnu.org/licenses/gpl-3.0.en.html`
          break;
        case "Mozilla Public License 2.0":
          return `https://www.mozilla.org/en-US/MPL/2.0/`
            break;
    default:
      return ``
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return ""
  }
  return `\n\n## License\n${renderLicenseBadge(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contribution, test, license, username, email}) {
  return `# ${title}      
  ${renderLicenseBadge(license)}
## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Installation 
${installation}

## Usage
${usage}

## License

>${license}

${renderLicenseLink(license)}


## Contribution
${contribution}

## Test
${test}

## Questions?
My GitHub username:
>
>${username}

My email address:
>
>${email}

`;
}

module.exports = generateMarkdown;
