import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import NameField from './components/NameField';
import DateField from './components/DateField';
import GenderPick from './components/GenderPick';
import EmailField from './components/EmailField';

class FormApp extends Component {

  constructor(){
    super();
    this.timeout = null;
    this.state = {
      validated: false,
      errors: {
        firstName: true,
        lastName: true,
        email: true
      }
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({validated: true});

    if (this.checkFormValidity()) { 
      this.showAlertFromForm(new FormData(e.target));
    }
  }

  showAlertFromForm(formData){
    var object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    })
    alert(JSON.stringify(object));
  }
  
  checkFormValidity = () => {
    let errors = this.state.errors;
    for (const error in errors){
      if (errors[error]) return false;
    }
    return true;
  }

  setFieldError = (field, value) => {
    let errors = this.state.errors;
    errors[field] = value;
    this.setState({errors});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form noValidate onSubmit={this.handleSubmit}>
            <NameField 
              validated={this.state.validated} 
              errors={this.state.errors.firstName} 
              fieldName="firstName"
              placeholder="First Name"
              setError={this.setFieldError}
            />
            <NameField 
              validated={this.state.validated} 
              errors={this.state.errors.lastName} 
              fieldName="lastName"
              placeholder="Last Name"
              setError={this.setFieldError}
            />
            <GenderPick/>
            <DateField/>
            <EmailField 
              validated={this.state.validated} 
              errors={this.state.errors.email} 
              fieldName="email"
              placeholder="Email address"
              setError={this.setFieldError}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default FormApp;
