const expect = require("chai").expect;
const request = require("request");

const url = 'http://localhost:3000';
describe("Calculater API",()=>{
    describe("plus calcuate",()=>{
        it('return status 200',(done)=>{
            request.post(url+'/plus').form({opone:3,optwo:5}).on('response',(res)=>{
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it('return correct plus result',(done)=>{
            request.post({url:url+'/plus',form:{opone:3, optwo:5}},(err,res,body)=>{

                expect(JSON.parse(body)).deep.to.equal({
                    result:8
                });
                done();
            });
        });
    });

    describe("minus calcuate",()=>{
        it('return status 200',()=>{
            
        });

        it('return correct minus result',()=>{

        });
    });

    describe("divde calcuate",()=>{
        it('return status 200',()=>{
            
        });

        it('return correct divide result',()=>{

        });
    });

    describe("multiply calcuate",()=>{
        it('return status 200',()=>{
            
        });

        it('return correct multiply result',()=>{

        });
    });
});