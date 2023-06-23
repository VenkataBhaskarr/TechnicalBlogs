const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
   const path = "./files/todos.json";
   const existingData = fs.readFileSync(path, 'utf8');
   const existingJSON = JSON.parse(existingData);
   console.log(existingJSON);
   res.send(existingJSON);
});

app.get('/todos/:id', (req, res) => {
    const path = "./files/todos.json";
    const existingData = fs.readFileSync(path, 'utf8');
    const existingJSON = JSON.parse(existingData);
    existingJSON.map((todo) => {
        if (todo.id === parseInt(req.params.id)) {
            return res.send(todo);
        }
    })
    return res.send('No todo found');
})

app.post('/todos', (req, res) => {
    const directory = './files';
    const title = req.body.title;
    const description = req.body.description;
    const existing = fs.readFileSync(`${directory}/todos.json`, 'utf8');
    const existingJSON = JSON.parse(existing);
    const body = {
        id : existingJSON.length + 1,
        title: title,
        description: description
    }
    existingJSON.push(body);
    fs.writeFileSync(`${directory}/todos.json`, JSON.stringify(existingJSON));
    res.send('todo added to the file');
})

app.put('/todos/:id', (req, res) => {
    const path = "./files/todos.json";
    const existingData = fs.readFileSync(path, 'utf8');
    const existingJSON = JSON.parse(existingData);
    const object = {}
    existingJSON.map((todo) => {
        if (todo.id === parseInt(req.params.id)) {
            todo.title = req.body.title;
            todo.description = req.body.description;
            fs.writeFileSync(path, JSON.stringify(existingJSON));
            return res.send('todo updated');
        }
    })
    return res.send('No todo found');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
