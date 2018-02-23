const Marionette = require('backbone.marionette');

const ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('../templates/todoitem.html')
});

const TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ToDo
});

module.exports = TodoList;
