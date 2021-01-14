const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const generatePassword = require('password-generator');

const { Task } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/tasks', (req, res) => {

  Task.find({}, (err, foundTasks) => {
    if (err) {
      console.error(err);
      res.json({ error: err });
    } else {
      res.json(foundTasks);
    }
  })
});

app.post('/api/tasks', (req, res) => {
  const { name, dueDate } = req.body;
  if (!(name && dueDate)) {
    console.log('Missing task parameters.');
    res.json({ error: 'Missing task parameters.' })
  } else {
    const newTask = new Task({ name, dueDate, isDone: false });
    newTask.save((err, savedTask) => {
      if (err) {
        console.error(err);
        res.json({ error: err });
      } else res.json({ success: 'Task saved.'});
    })
  }
});

app.put('/api/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    console.log('Missing task id parameter.');
    res.json({ error: 'Missing task id parameter.'})
  } else if (!(req.body.name || req.body.dueDate || req.body.isDone)) {
    console.log('Missing update body parameters.');
    res.json({ error: 'Missing update body parameters.'})
  } else {
    const update = req.body;
    Task.findByIdAndUpdate(taskId, update, (err, updatedTask) => {
      if (err) {
        console.error(err);
        res.json({ error: err });
      } else res.json({ success: 'Task updated.'});
    })
  }
});


// The 'catchall' handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;