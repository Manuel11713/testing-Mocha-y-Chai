let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');


//Assertion Style 
chai.should();
chai.use(chaiHttp);

describe('Tasks API',()=>{
    //Test the GET routes
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
                .get('/tasks/1')
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('description');
                    response.body.should.have.property('done');
                    done();
                });
        });
    });


    //Test the POST route
    describe('POST /tasks',() => {
        it('It should make a post and return it',(done)=>{
            const newTask = {
                description:"nueva tarea testing",
                done:false
            };
            chai.request(server)
                .post('/tasks')
                .send(newTask)
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

    //
})