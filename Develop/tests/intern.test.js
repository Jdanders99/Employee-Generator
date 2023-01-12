const Intern = require('../lib/intern');

describe('intern', () => {
    describe('initialization', () => {
        it('creates a new object with name, id, email and github for the intern', () => {
            const intern = new Intern('Jake', 5, 'test@something.com', 'OSU');

            expect(intern.name).toEqual('Jake');
            expect(intern.id).toEqual(5);
            expect(intern.email).toEqual('test@something.com');
            expect(intern.github).toEqual('OSU');
        })
    });

    describe('userGithub', () => {
        it('returns the school the intern is attending', () => {
            const intern = new Intern('Seth', 3, 'test@something.com', 'OSU');

            expect(intern.userSchool()).toEqual('OSU');
        })
    });

    describe('userRole', () => {
        it('returns the role of intern', () => {
            const intern = new Intern('Seth', 3, 'test@something.com', 'OSU');

            expect(intern.userRole()).toEqual('Intern');
        })
    })
});