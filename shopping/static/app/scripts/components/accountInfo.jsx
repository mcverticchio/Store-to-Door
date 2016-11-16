var Backbone = require('backbone');
var React = require('react');
var TemplateContainer = require('../layout/headerTemplate.jsx').TemplateContainer;
var User = require('../models/user.js').User;


var AccountForm = React.createClass({
  handleInputChange: function(e){
    var accountInfoField = e. target;

    var newState = {};
    newState[accountInfoField.name] = accountInfoField.value;
    this.setState(newState);

    this.props.user.set(accountInfoField.name, accountInfoField.value)
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.saveInfo(this.state);
  },
  render: function(){
    return (

    <form onSubmit={this.handleSubmit}>
    <div className="form-group row">
        <label htmlFor="example-text-input" className="col-xs-2 col-form-label">FirstName</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="firstname" className="form-control" type="text" id="example-text-input" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-xs-2 col-form-label">LastName</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="lastname" className="form-control" type="text"  id="example-text-input" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-xs-2 col-form-label">Street Address</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="address" className="form-control" type="text" id="example-text-input" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-xs-2 col-form-label">City</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="city" className="form-control" type="text" id="example-text-input" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-xs-2 col-form-label">State</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="state" className="form-control" type="text" id="example-text-input" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-email-input" className="col-xs-2 col-form-label">Email</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="email" className="form-control" type="email" id="example-email-input" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-tel-input" className="col-xs-2 col-form-label">Telephone</label>
        <div className="col-xs-10">
          <input onChange={this.handleInputChange} name="telephone" className="form-control" type="tel" id="example-tel-input" />
        </div>
      </div>
      </form>
    )
  }
});

var AccountInfoContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    };
  },
  // saveInfo: function (userData){
  //   var user = this.state.user;
  //
  //   user.set(userData);
  //
  //   user.save().then(() => {
  //       console.log("info saved");
  //   });
  // },
  render: function(){
    return (
      <TemplateContainer>
        <h1>Account Information</h1>
          <h2>Welcome {localStorage.getItem('username')}</h2>
          <AccountForm user={this.state.user}/>
            <button type="">My Information is correct</button>
      </TemplateContainer>
    )
  }
});


module.exports = {
  AccountInfoContainer: AccountInfoContainer
};
