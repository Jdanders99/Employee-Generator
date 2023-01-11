const Employee = require('./lib/employee.js');
const Engineer = require ('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');
const inquirer = require ('inquirer');
const fs = reqiure('fs');
const generateHTML = require('./utils/generateHTML.js');
const team = [];

function teamBuilder() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role would you like to select?',
            choices: ['Intern', 'Engineer', 'Manager', 'None'],
            name: 'employeeType'
        }
    ])
        .then((data) => {
            if (data.employeeType === 'Intern') {
                console.log(data);
            }
        })
};
