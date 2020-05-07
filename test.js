const chai = require('chai');

chai.should();

describe('Utils', function () {
    it('should return correct structured error', function () {
        let a = 5;
        a.should.be.deep.equal(6);
    });
});
