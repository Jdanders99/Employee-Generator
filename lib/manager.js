const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, ofcNum) {
        super(name, id, email);
        this.ofcNum = ofcNum;
    }

    userOfcNum () {
        return this.ofcNum;
    }

    userRole () {
        return 'Manager';
    }
};

module.exports = Manager;