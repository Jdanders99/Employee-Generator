const Engineer = require('../lib/engineer');

describe('engineer', () => {
    describe('initialization', () => {
        it('creates a new object with name, id, email and github for the engineer', () => {
            const engineer = new Engineer('Seth', 3, 'test@something.com', 'Seth3GH');

            expect(engineer.name).toEqual('Seth');
            expect(engineer.id).toEqual('3');
            expect(engineer.email).toEqual('test@something.com');
            expect(engineer.github).toEqual('Seth3GH');
        })
    });

    describe('userGithub', () => {
        it('returns the engineers GitHub username', () => {
            const engineer = new Engineer('Seth', 3, 'test@something.com', 'Seth3GH');

            expect(engineer.userGithub()).toEqual('Seth3GH');
        })
    });

    describe('userRole', () => {
        it('returns the role of engineer', () => {
            const engineer = new Engineer('Seth', 3, 'test@something.com', 'Seth3GH');

            expect(engineer.userRole()).toEqual('Engineer');
        })
    })
});