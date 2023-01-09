const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    userSchool () {
        return this.school;
    }

    userRole () {
        return 'Intern';
    }
};

module.exports = Intern;