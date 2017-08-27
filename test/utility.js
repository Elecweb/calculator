const expect = require("chai").expect;
const {divide,isNumeric,minus,multiply,plus} = require('./../utility');
describe('utility functions',()=>{
    describe('plus function',()=>{
        it("3 + 5 should be 8",()=>{
            expect(plus(3,5)).to.equal(8);
        });
        it("10 + 10 should be 20",()=>{
            expect(plus(10,10)).to.equal(20);
        });
    });

    describe('multiply function',()=>{
        it("3 * 5 should be 15",()=>{
            expect(multiply(3,5)).to.equal(15);
        });
        it("10 * 10 should be 100",()=>{
            expect(multiply(10,10)).to.equal(100);
        });
    });

    describe('divide function',()=>{
        it("3 / 5 should be 15",()=>{
            expect(divide(3,5)).to.equal(0.6);
        });
        it("10 * 10 should be 100",()=>{
            expect(divide(10,10)).to.equal(1);
        });
    });

    describe('minus function',()=>{
        it("3 - 5 should be -2",()=>{
            expect(minus(3,5)).to.equal(-2);
        });
        it("10 - 10 should be 0",()=>{
            expect(minus(10,10)).to.equal(0);
        });
    });

    describe('check type of variable is number',()=>{
        it("3 should be number",()=>{
            expect(isNumeric(3)).to.be.true;
        });
        it("'string' shouldn't be number",()=>{
            expect(isNumeric('string')).to.be.false;
        });
    });
});