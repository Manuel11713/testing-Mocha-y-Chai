let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');


//Assertion Style 
chai.should();
chai.use(chaiHttp);

describe('Tasks API',()=>{
    //Test the GET route
    describe('GET /tasks',() => {
        it('It should get all the tasks',(done)=>{
            chai.request(server)
                .get('/tasks')
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(4);
                    done();
                });
        });
        it('It should get an error, not exist route /task',(done)=>{
            chai.request(server)
                .get('/task')
                .end((err,response)=>{
                    response.should.have.status(404);
                    done();
                });
        });

        it('It should get just one task',(done)=>{
            chai.request(server)
                .get('/tasks/5')
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    //response.body.length.should.be.eq(4);
                    done();
                });
        });
    });

    //Test the GET by id route

    //Test the POST route

    //
})