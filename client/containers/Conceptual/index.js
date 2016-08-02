import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FeedbackActions from '../../actions/feedback';

import Breadcrumb from '../../components/Breadcrumb';
import Feedback1 from '../../components/Feedback1';
import DummySidebar from './DummySidebar';
import DummyContent from './DummyContent';

const Conceptual = (props) => {
  // let widget;
  // switch (props.query.ver) {
  //   case '1':
  //     widget = <Feedback1 {...props} smileText="Yes" frownText="No" />;
  //     break;
  //   case '2':
  //     widget = <Feedback2 {...props} />;
  //     break;
  //   case '3':
  //     widget = <Feedback3 {...props} />;
  //     break;
  //   default:
  //     widget = <Feedback1 {...props} smileText={props.feedback.smiles} frownText={props.feedback.frowns} />;
  // }

  const widget = <Feedback1 {...props} smileText={props.feedback.smiles} frownText={props.feedback.frowns} />;

  return (
    <div>
      <Breadcrumb />
      <div className="conceptual">
        <DummySidebar />
        <DummyContent />

        {widget}
      </div>
    </div>
  );
};

Conceptual.propTypes = {
  feedback: PropTypes.object,
  query: PropTypes.object,
};

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
