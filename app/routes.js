var express = require('express');
var app = express();

var task = require('./models/task');

module.exports = function(app) {
    //app.get('/', function(req, res) {
     //   res.sendfile('./public/index.html');
    //});

    app.get('/api/tasks', function(req, res) {
        task.find(function(err, tasks) {
            if(err)
                res.send(err);
            res.json(tasks);
        });
    });

    app.post('/api/tasks', function(req, res) {
        task.create({
            text: req.body.text,
            isDone: false
        }, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    });

    app.delete('/api/tasks/:taskId', function(req, res) {
        task.remove({
            _id: req.params.taskId
        }, function(err, task) {
            if (err)
                res.send(err);
        }); 
    });
}

