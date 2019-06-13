import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Form } from 'react-bootstrap';
import { contactActions } from '../actions/ContactActions';

class AddContactContainer extends Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);

      this.state = {
      ...this.state,
          contact: {firstName: '', lastName: '', email: '', phone: ''},
          validated: false
    };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            this.props.addContact(this.state.contact);
        }
        this.setState({ validated: true });
    }

    handleValueChange(fieldName, value) {
        this.setState( prevState => ({ contact : 
                {...prevState.contact, [fieldName]: value
                }
        }));
   }

    render() {
      const { validated } = this.state;
      return (
          <Container>
            <h1>Add contact</h1>
            <p>* all fields are required</p>
            <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter first name" onChange={e => this.handleValueChange('firstName',e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter last name" onChange={e => this.handleValueChange('lastName',e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" onChange={e => this.handleValueChange('email',e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control required type="text" placeholder="Enter phone number" onChange={e => this.handleValueChange('phone',e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </Container>
    );
    }
}

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(contactActions, dispatch)
   
export default connect(
  null,
  mapDispatchToProps
)(AddContactContainer);
