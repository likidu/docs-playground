import React, { PropTypes } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const App = (props) => (
  <div>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
