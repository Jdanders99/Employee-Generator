const Employee = require('../lib/employee');

describe('employee', () => {
    describe('initilization', () => {
        it('creates a new object containing name, id, and email for the employee', () => {
            const employee = new Employee('Mike', 7, 'test@something.com');

            expect(employee.name).toEqual('Mike');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('test@something.com');
        })
    })

    describe('userName', () => {
        it('returns the name of the employee', () => {
            const employee = new Employee('Mike', 7, 'test@something.com');

            expect(employee.userName()).toEqual('Mike');
        })
    })

    describe('userId', () => {
        it('returns the name of the employee', () => {
            const employee = new Employee('Mike', 7, 'test@something.com');

            expect(employee.userId()).toEqual(7);
        })
    })

    describe('userEmail', () => {
        it('returns the email of the employee', () => {
            const employee = new Employee('Mike', 7, 'test@something.com');

            expect(employee.userEmail()).toEqual('test@something.com');
        })
    })

    describe('userRole', () => {
        it('returns the role of employee', () => {
            const employee = new Employee('Mike', 7, 'test@something.com');

            expect(employee.userRole()).toEqual('Employee');
        })
    })
})