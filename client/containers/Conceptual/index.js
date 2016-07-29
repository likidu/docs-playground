import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';
import * as FeedbackActions from '../../actions/feedback';

const Conceptual = (props) => (
  <div>
    <Header />
    <MainSection {...props} />
    <Footer />
  </div>
);

function mapStateToProps(state, ownProps) {
  return {
    feedback: state.feedback,
    query: ownProps.location.query,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FeedbackActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Conceptual);
