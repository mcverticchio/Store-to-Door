var Backbone = require('backbone');
var React = require('react');
var django = require('../djangoUtils');
var $ = require('jquery');
var _ = require('underscore');

var FoodItem = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    search: ''
  },
  initialize: function(){
    window.account = this;
    var token = localStorage.getItem('token');
    var self = this;
    $.ajaxSetup({
      beforeSend: function(xhr, settings){
        xhr.setRequestHeader("Authorization", 'Token ' + token);
        django.setCsrfToken.call(this, xhr, settings);
      }
    });
  },
});




var FoodItemCollection = Backbone.Collection.extend({
  model: FoodItem,
  // url: 'https://private-02760-finalproject3.apiary-mock.com/questions'
  url: 'api/supermarket/',
  // url: 'http://www.SupermarketAPI.com/api.asmx/SearchByProductName?APIKEY=3f46c23cb1&ItemName=Parsley'
  fetch: function(options) {
    options = _.extend({parse: true}, options);
    var success = options.success;
    var collection = this;
    options.success = function(resp) {
      var method = options.reset ? 'reset' : 'set';
      collection[method](resp, options);
      if (success) success.call(options.context, collection, resp, options);
      collection.trigger('sync', collection, resp, options);
    };
    // wrapError(this, options);
    return this.sync('create', this, options);
  },
  parse: function(data){
    // data.Product.forEach(function(item){
    //   item.price = _.random(4, 10);
    // })
    return data.Product
    console.log('product', data.Product);
  }
});





var CartItemModel = Backbone.Model.extend({
  initialize: function(){
    window.account = this;
    var token = localStorage.getItem('token');
    var self = this;
    $.ajaxSetup({
      beforeSend: function(xhr, settings){
        xhr.setRequestHeader("Authorization", 'Token ' + token);
        django.setCsrfToken.call(this, xhr, settings);
      }
    });
  }
});




var CartItemCollection = Backbone.Collection.extend({
  model: CartItemModel,
  url: 'api/carts/latest/add_item',
});




var Cart = Backbone.Model.extend({
  idAttribute: 'id',
  url: function(){
    return 'api/carts/latest/'
  },
  defaults: {
    cart_items: new CartItemCollection()
  },
  initialize: function(){
    window.account = this;
    var token = localStorage.getItem('token');
    var self = this;
    $.ajaxSetup({
      beforeSend: function(xhr, settings){
        xhr.setRequestHeader("Authorization", 'Token ' + token);
        django.setCsrfToken.call(this, xhr, settings);
      }
    });
  },
  save: function(key, val, options){
    // console.log('toJSON', this.get('cart_items'));
    this.set('items', this.get('items').toJSON());
    // this.set('user', localStorage.getItem('id'));
    return Backbone.Model.prototype.save.apply(this, arguments);
  },
  parse: function(data){
    data.items = new CartItemCollection(data.items);
    return data;
  },
  total: function(){
    console.log()
    // return this.reduce(function(sum, model){
    //   console.log('model', model)
    //   return sum + parseFloat(model.model__price);
    //
    // }, 0);
  }
});


var NewEmptyCart = Backbone.Model.extend({
  idAttribute: 'id',
  url: 'api/carts/',
  initialize: function(){
    window.account = this;
    var token = localStorage.getItem('token');
    var self = this;
    $.ajaxSetup({
      beforeSend: function(xhr, settings){
        xhr.setRequestHeader("Authorization", 'Token ' + token);
        django.setCsrfToken.call(this, xhr, settings);
      }
    });
  },
});



module.exports = {
  FoodItem: FoodItem,
  FoodItemCollection: FoodItemCollection,
  Cart: Cart,
  CartItemModel: CartItemModel,
  CartItemCollection: CartItemCollection,
  NewEmptyCart: NewEmptyCart
};
