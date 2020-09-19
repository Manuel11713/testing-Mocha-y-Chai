const express = require('express');

const app = express();
app.use(express.json());

let tasks = [
    {
        id:0,
        description:'Sacar a pasear al perro',
        done:false
    },
    {
        id:1,
        description:'Lavar los trastes',
        done:true
    },
    {
        id:2,
        description:'Hacer la tarea',
        done:true
    },
    {
        id:3,
        description:'pagar la renta',
        done:false
    }
];
app.get('/',(req,res)=>{
    res.send('Wellcome to the simplest API')
})

app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

app.get('/tasks/:id',(req,res)=>{
    const {id} =  req.params;
    const taskFinded = tasks.find(task=>{
    
        return task.id == id;
    });
    if(!taskFinded)return res.send('There are no task with that id');
    res.json(taskFinded);
});

app.post('/tasks',(req,res)=>{
    const {newTask} =  req.body;
    newTask.id = tasks.length;

    tasks.push(newTask);

    res.json(tasks);
});

app.listen(5000);

module.exports = app;