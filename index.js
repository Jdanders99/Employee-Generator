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
                newIntern(data);
            } else if (data.employeeType === 'Engineer') {
                newEngineer(data);
            } else if (data.employeeType === 'Manager') {
                newManager(data);
            } else {
                buildTeam(team);
            }
        })
};

function newIntern(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the interns employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the interns email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What school does the intern go to?',
            name: 'school'
        }
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            teamBuilder();
        })
};
