const Backbone = require('backbone');
const Marionette = require('backbone.marionette'); // import Marionette

const ToDoModel = require('../models/todo');

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
  template: require('../templates/todoitem.html')
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
  template: require('../templates/todolist.html'),

  childView: ToDo,
  childViewContainer: 'ul',

  // add UI hash to view; attach to any view to create cached jQuery
  // selectors to elements in view's template
  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  // references keys in UI hash; listen to jQuery events, fire trigger
  triggers: {
    'submit @ui.form': 'add:todo:item'
  },

  // listens to changes occurring on attached `this.collection` attribute;
  // value must exist as a method on this view
  collectionEvents: {
    add: 'itemAdded'
  },

  modelEvents: {
    change: 'render'
  },

  // trigger converted to an `onEventName` method and called
  // we can also reference the UI values in this view and treat it like a
  // jQuery selector object
  onAddTodoItem: function() {
    this.model.set({
      assignee: this.ui.assignee.val(),
      text: this.ui.text.val(),
    }, {validate: true});

    const items = this.model.pick('assignee', 'text');
    this.collection.add(items);
  },

  // this is the method referenced above in `collectionEvents`
  // is called when the event is triggered
  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: '',
    });
  }
});

module.exports = TodoList;
