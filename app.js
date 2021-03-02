const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");

//function to prompt manager
const teamArray= [];

async function getManager(){
    try{
    let response= await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of the manager.: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager ID here: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is email for manager? : ',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the employee?: '
        }]);
        const manager= new Manager(response.name, response.id, response.email, response.officeNumber);
        teamArray.push(manager);
    }catch(err){
        return console.log(err);
        }
        console.log(teamArray);
   question();     
};

getManager();

//function to prompt the questions

async function question(){
    let formComplete='';
    do{
        try{
        let response= await inquirer.prompt([
            {
                type: 'input',
                name:'name',
                message: 'What is the name of the employee? : '
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the employee ID here: '
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is email for employee? : ',
            },
            {
                type: 'list',
                name: 'role',
                message: 'What role does this employee have? : ',
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ])