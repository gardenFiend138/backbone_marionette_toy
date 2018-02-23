const Backbone = require('backbone');
const Marionette = require('backbone.marionette'); // import Marionette


// var HelloWorld = Marionette.LayoutView.extend({ // create new view
//   el: '#app-hook',                              // jQuery selector
//   template: require('./templates/layout.html')  // direct the view to the template we want to use
// });
//
// var hello = new HelloWorld();                   // instantiate new instance of view
//
// hello.render();                                 // render the new instance of view

const TodoList =  Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/layout.html')
});

const todo = new TodoList({
  model: new Backbone.Model({ // wrapping todo object in backbone model 
    items: [
      {assignee: 'Guy', text: 'Learn backbone'},
      {assignee: 'Guy', text: 'Learn marionette'},
      {assignee: 'Me', text: 'Have fun!'},
    ]
  })
});

todo.render();
