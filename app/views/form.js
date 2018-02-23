const Marionette = require('backbone.marionette');

const FormView = Marionette.LayoutView.extend({
  tagName: 'form',
  template: require('../templates/form.html'),

  triggers: {
    submit: 'add:todo:item'
  },

  modelEvents: {
    change: 'render'
  },

  ui: {
    assignee: '#id_assignee',
    text: '#id_text'
  }
});

module.exports = FormView;
