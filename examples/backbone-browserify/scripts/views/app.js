var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
var exampleTemplate = 'Some plain ole text up in here';
Backbone.$ = $;


module.exports = Backbone.View.extend({
    el: '#main',
    template: _.template(exampleTemplate),
    render: function () {
        this.$el.html(this.template({}));
        return this;
    }
});
