import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import ContactContainer from './components/ContactContainer';
import AddContactContainer from './components/AddContactContainer';


export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/contact' component={ContactContainer} />
    <Route exact path='/contact/new' component={AddContactContainer} />
  </Layout>
);
