import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactActions } from '../actions/ContactActions';
import { ContactList } from './ContactList';

class ContactContainer extends Component {
  componentDidMount() {
    // This method is called when the component is first added to the document
    this.ensureDataFetched();
  }

  ensureDataFetched() {
    this.props.getContacts();
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactList contactInfo={this.props.contactInfo} />
        <Link to="/contact/new" className="btn btn-primary">Add contact</Link>
      </div>
    );
  }
}

function renderContactsTable(props) {
    return (
        <div>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.contacts.map(contact =>
                  <tr key={contact.contactId}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>Edit | Delete</td>
                  </tr>
                )}
              </tbody>
          </table>
          <Link to="/contact/new" className="btn btn-primary">Add contact</Link>
      </div>
  );
}

const mapStateToProps = state => ({
    contactInfo: state.contactInfo
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(contactActions, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactContainer);

