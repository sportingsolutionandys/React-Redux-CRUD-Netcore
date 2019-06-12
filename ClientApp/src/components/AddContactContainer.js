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
      contact: {firstName: '', lastName: '', email: '', phone: ''}
    };
    }

    handleSubmit() {
        //e.preventDefault();
        // Call add action with contact object
        this.props.addContact(this.state.contact);
    }

    handleValueChange(fieldName, value) {
        this.setState( prevState => ({ contact : 
                {...prevState.contact, [fieldName]: value
                }
        }));
   }

    render() {
      return (
          <Container>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" onChange={e => this.handleValueChange('firstName',e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" onChange={e => this.handleValueChange('lastName',e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => this.handleValueChange('email',e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone numbner" onChange={e => this.handleValueChange('phone',e.target.value)}/>
              </Form.Group>
              <Button variant="primary" onClick={this.handleSubmit}>
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
