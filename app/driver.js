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
const ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./templates/todoitem.html')
});

const TodoList =  Marionette.CollectionView.extend({
  el: '#app-hook',
  tagName: 'ul',

  childView: ToDo
});

const todo = new TodoList({
  collection: new Backbone.Collection([
      {assignee: 'Guy', text: 'Learn backbone'},
      {assignee: 'Guy', text: 'Learn marionette'},
      {assignee: 'Me', text: 'Have fun!'},
  ])
});

todo.render();
