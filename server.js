const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use the bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a list of tasks
let tasks = [
  { id: 1, description: 'Buy milk', completed: false },
  { id: 2, description: 'Go for a run', completed: true },
  { id: 3, description: 'Finish work report', completed: false }
];

// Define a route to get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Define a route to get a single task by ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found.');
  res.json(task);
});

// Define a route to add a new task
app.post('/tasks', (req, res) => {
  const task = {
    id: tasks.length + 1,
    description: req.body.description,
    completed: false
  };
  tasks.push(task);
  res.json(task);
});

// Define a route to update a task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found.');
  task.description = req.body.description;
  task.completed = req.body.completed;
  res.json(task);
});

// Define a route to delete a task
app.delete('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found.');
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  res.json(task);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
