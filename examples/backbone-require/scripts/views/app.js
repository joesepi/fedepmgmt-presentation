/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/example.html'
], function ($, _, Backbone, exampleTemplate) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#main',
        template: _.template(exampleTemplate),
        render: function () {
            this.$el.html(this.template({}));
            return this;
        }
    });

    return AppView;
});
