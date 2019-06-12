import React from 'react';

export const ContactList = ({contactInfo}) => {
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
            {contactInfo.contacts.map(contact =>
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
  </div>
  )
};
