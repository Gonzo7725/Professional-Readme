// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs=require("fs")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:"What is your project title?",
    name:'title'
},{
    type:'list',
    message:"",
    name:'license',
    choices:["MIT","Apache","IBM","No License"]
},{
    type:'input',
    message:"Descpition of project",
    name:'description'
},{
    type:'input',
    message:"What command is used to install repo into local machine?",
    name:'installation'
},{
    type:'input',
    message:"What dependencies are necessary to run the application?",
    name:'dependencies'
},{
    type:'input',
    message:"What command do you use to run the application?",
    name:'usage'
},{
    type:'input',
    message:"Contribution",
    name:'contribution'
},{
    type:'input',
    message:"What command does user input to test application?",
    name:'test'
},{
    type:'input',
    message:"Please enter your GitHub username",
    name:'github'
},{
    type:'input',
    message:"Please enter your email address",
    name:'email',
    validate: function(value){
        const pass=value.match(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        if(pass||value===''){
            return true;        
        }
        return 'Please enter valid email or leave field empty.';
            },
            default: () => '',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content=generateMarkdown(data)
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error("Error occured writing file:",err)
        }else{
            console.log("README.md file generated successfully")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)

    })
    .catch(error=>{
        console.error("An error occured prompting questions:",error)
    })
}

// Function call to initialize app
init();
