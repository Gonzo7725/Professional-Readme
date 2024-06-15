# Professional-Readme


## Description

In this weeks chalenge we were required to create a README generator. Every good quality project needs a professional looking README with information about the app, what its for, how to install the app, and how to use it. This is a command-line application that runs with Node.js and dynamically generates a README.md file based on input about your project. 

## Installation 

-Git clone your repository to local machine
-Use npm install to install npm package dependencies as specified in the package.json folder
-Inquirer will prompt you with questions and the user will answer them in the way that best demonstrates thier project or application
-Once user answers all questions the application will generate the README.md file

## Usage
Link to video


`<iframe src="https://drive.google.com/file/d/1kvJnV3aidmesLlLTUQK8WZinhTtfdFhB/preview" width="640" height="480"></iframe>`



When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your project. From there, the application will generate a markdown and a table of contents for the README based on your responses to the Inquirer prompts. Finally, fs.writeToFile is used to generate your project's README.md file. Check out the README.md in the output folder this repo as an example on the final output.

## Credits

For help with understanding Node.js I used W3Schools.

https://www.w3schools.com/nodejs/nodejs_intro.asp

For help with JavaScript I referenced W3Schools.

https://www.w3schools.com/js/

## License

MIT License

