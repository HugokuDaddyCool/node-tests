const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBeA('number').toBe(44);
});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBeA('number').toBe(9);
});

// it('should expect some values', () => {
    // expect(11).toNotBe(12);
    // expect({name: 'vic'}).toNotEqual({name: 'Victor'});
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Victor',
//         age: 46,
//         location: 'Monterrey'
//     }).toInclude({
//         age: 46
//     });
// });

it('should set firstName and lastName', () => {
    var user = {
        location: 'Monterrey',
        age: 46
    };
    var res = utils.setName(user, 'Victor Cortes');
    expect(res).toInclude({
        firstName: 'Victor',
        lastName: 'Cortes'
    });
});

it('should async add two nunmbers', (done) => {
    utils.asyncAdd(2, 3, (sum) => {
        expect(sum).toBeA('number').toBe(5);
        done();
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
        expect(res).toBeA('number').toBe(9);
        done();
    })
});