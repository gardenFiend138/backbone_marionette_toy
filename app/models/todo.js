const Backbone = require('backbone');

const ToDo = Backbone.Model.extend({
  defaults: {
    assignee: '',
    text: ''
  },

  validate: attrs => {
    let errors = {};
    let hasErrors = false;

    if (!attrs.text) {
      errors.text = 'You want to do nothing?! Come on, gimme some text :]';
      hasErrors = true;
    }

    if (!attrs.assignee) {
      errors.assignee = 'assignee must be set';
      hasErrors = true;
    }

    if (hasErrors) {
      _.each(errors, alert);
      return errors;
    }
  }
});

module.exports = ToDo;
