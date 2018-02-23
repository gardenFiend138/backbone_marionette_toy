const Marionette = require('backbone.marionette');
const TodoView = require('./views/layout');
const ToDoModel = require('./models/todo');

const initialData = [
  {assignee: 'Guy', text: 'Learn backbone'},
  {assignee: 'Guy', text: 'Learn marionette'},
  {assignee: 'Me', text: 'Have fun!'},
];

const app = new Marionette.Application({
  onStart: function(options) {
    let todo = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new ToDoModel()
    });
    todo.render();
    todo.triggerMethod('show');
  }
});

app.start({initialData})
