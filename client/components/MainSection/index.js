/* eslint max-len: ["error", 400, 4] */
import React, { PropTypes } from 'react';
import Feedback1 from '../Feedback1';
import Feedback2 from '../Feedback2';
import Feedback3 from '../Feedback3';
import DummySidebar from './DummySidebar';
import DummyContent from './DummyContent';

const MainSection = (props) => {
  let widget;
  switch (props.query.ver) {
    case '1':
      widget = <Feedback1 {...props} smileText="Yes" frownText="No" />;
      break;
    case '2':
      widget = <Feedback2 {...props} />;
      break;
    case '3':
      widget = <Feedback3 {...props} />;
      break;
    default:
      widget = <Feedback1 {...props} smileText={props.feedback.smiles} frownText={props.feedback.frowns} />;
  }

  return (
    <div className="conceptual">
      <DummySidebar />
      <DummyContent />

      {widget}
    </div>
  );
};

MainSection.propTypes = {
  feedback: PropTypes.object,
  query: PropTypes.object,
};

export default MainSection;
