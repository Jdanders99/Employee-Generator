const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    userGithub() {
        return this.github;
    }

    userRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;