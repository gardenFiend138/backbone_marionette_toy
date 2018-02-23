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

// CollectionView loops through all models in specified collection, rendering
// each ofthem using a specific itemView (childView?--this must be specified
// for CollectionView), then appends the resuls of the item view's `el` to the
// collection view's `el`
// const TodoList =  Marionette.CollectionView.extend({
//   el: '#app-hook',
//   tagName: 'ul',
//
//   childView: ToDo
// });

// CompositeView extends from CollectionView to be used as a composite view
// for scenarios where it should represent both a branch and a leaf in a tree
// structure, or for scenarios where a collection needs to be rendered within
// a wrapper template
const TodoList =  Marionette.CompositeView.extend({
  el: '#app-hook',
  template: require('./templates/todoitem.html'),

  childView: ToDo,
  childViewContainer: 'ul',

  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  triggers: {
    'submit @ui.form': 'add:todo:item'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onAddTodoItem: function() {
    this.collection.add({
      asignee: this.ui.assignee.val(),
      text: this.ui.text.val(),
    });
  },

  itemAdded: function() {
    this.ui.assignee.val('');
    this.ui.text.val('');
  }
});

const todo = new TodoList({
  collection: new Backbone.Collection([
      {assignee: 'Guy', text: 'Learn backbone'},
      {assignee: 'Guy', text: 'Learn marionette'},
      {assignee: 'Me', text: 'Have fun!'},
  ])
});

todo.render();
