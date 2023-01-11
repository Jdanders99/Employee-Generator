const employee = require('./lib/employee.js');
const engineer = require('./lib/engineer.js');
const intern = require ('./lib/intern.js');
const manager = require ('./lib/manager.js');
const card = [];

function createCard(team) {
    
}

function cardIntern(employee) {
    return `<div class="card" style="width: 16rem; border-radius: 0;>
    <section style="background-color: gray; color: white; padding: 5px 8px; margin: 0; height: 75px;">
        <p style="margin: 2px 5px;">${employee.name}</p>
        <p style="margin: 0 0 5px;"><i class="bi-cup-hot-fill"></i>${employee.userRole()}<p>
    </section>
    <div class="card-body bg-light" style="padding: 30px 15px;">
        <div class="d-block" style="margin: 0;">
            <p style="height: 55px; background-color: white; border:solid 1px blue; margin: 0; padding; 10px 5px;>
                ID: ${employee.id}</p>
            <p style="height: 55px; background-color: white; border:solid 1px blue; margin: 0; padding; 10px 5px;>
                Email: ${employee.email}</p>
            <p style="height: 55px; background-color: white; border:solid 1px blue; margin: 0; padding; 10px 5px;>
                School: ${employee.school}</p>
        </div>
    </div>
</div>`
}; 

function cardEngineer(employee) {
    return `<div class="card" style="width: 16rem; border-radius: 0;>
    <section style="background-color: gray; color: white; padding: 5px 8px; margin: 0; height: 75px;">
        <p style="margin: 2px 5px;">${employee.name}</p>
        <p style="margin: 0 0 5px;"><i class="bi-cup-hot-fill"></i>${employee.userRole()}<p>
    </section>
    <div class="card-body bg-light" style="padding: 30px 15px;">
        <div class="d-block" style="margin: 0;">
            <p style="height: 55px; background-color: white; border:solid 1px blue; margin: 0; padding; 10px 5px;>
                ID: ${employee.id}</p>
            <p style="height: 55px; background-color: white; border:solid 1px blue; margin: 0; padding; 10px 5px;>
                Email: ${employee.email}</p>
            <p style="height: 55px; background-color: white; border:solid 1px blue; margin: 0; padding; 10px 5px;>
                GitHub: ${employee.userGithub()}</p>
        </div>
    </div>
</div>`
}; 