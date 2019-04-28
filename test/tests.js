import headsOrTails from '../src/heads-or-tails.js';
const test = QUnit.test;

test('get heads for number less than .5', (assert) => {
    //Arrange
    const number = .49;
    const expected = 'heads';

    //Act 
    const result = headsOrTails(number);

    //Assert
    assert.equal(result, expected);
});

test('get tails for number greater than .5', (assert) => {
    //Arrange
    const number = .5;
    const expected = 'tails';

    //Act
    const result = headsOrTails(number);

    //Assert
    assert.equal(result, expected);
});