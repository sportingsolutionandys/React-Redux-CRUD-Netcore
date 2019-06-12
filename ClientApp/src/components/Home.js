import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>CRUD test application</h1>
        <p>This is an example CRUD application built using React + Redux front end and .NetCore backend</p>
        <p>It shows a list of contacts from the server via the api and ability to add a new contact</p>
        <p>Front end functionality for editing and deleting a contact still needs to be added</p>
        <p>Unit and integration tests would need to be added to test full functionality properly</p>
  </div>
);

export default connect()(Home);
