const inquirer = require('inquirer');
const fs = require('fs');

// creates structure for README based on user input
const generate = (box) =>
	`# ${box[0].title}
## Description
- ${box[0].description}
## Table of Contents
- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
## Installation
- ${box[0].installation}
## Usage
- ${box[0].usage}
## License
- ${box[0].license}
## Contributing
- ${box[0].contribute}
## Tests
- ${box[0].tests}
##  Questions
- Email: ${box[0].questions}
- Github: [${gitHubText(box)}](${box[0].github})`
;

// array stores the user inputs
const box = [
];



// function gets the user's github handle
function gitHubText(box) {
	const data = box[0].github.split('/');
	const bit = data.slice(-1);
	return bit;
};


// function utilizes inquirer to get user inputs
function runInq() {
	inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the Title of this README:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the Description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install this:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage:',
        },
        {
            type: 'list',
            name: 'license',
			message: 'Choose a license: ',
			choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Describe how to contribute to this:',
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Describe how to test this:',
		},
			{
			type: 'input',
			name: 'questions',
			message: 'Enter your email:',
		},
		{
			type: 'input',
			name: 'github',
			message: 'Enter your Github link:',
		}
	])
    .then((inputs) => {
		box.push(inputs)
		writer(box)
	});
};

// function writes the generate() structure to a README file
function writer(box) {
	const readmePage = generate(box);
	fs.writeFile('generatedREADME.md', readmePage, (err) =>
		err ? console.log(err) : console.log('Success!')
	);
};




runInq();