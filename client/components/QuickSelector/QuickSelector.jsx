import React, { PropTypes } from 'react';

const QuickSelector = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

QuickSelector.propTypes = {
  children: PropTypes.node,
};

export default QuickSelector;
