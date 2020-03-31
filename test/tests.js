
import isYes from '../isYes.js';
const test = QUnit.test;
test('y and yes is answer while no is falses', function(assert) {
    const entry1 = 'y';
    const entry2 = 'yes';
    const entry3 = 'no';

    const answer = isYes(entry1);
    const answer2 = isYes(entry2);
    const answer3 = isYes(entry3);

    assert.equal(answer, true);
    assert.equal(answer2, true);
    assert.equal(answer3, false);
});
