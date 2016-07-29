import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PopOver = (props) => {
  const popOverClass = classNames('popover', `is-${props.placement}`);
  return (
    <div className={popOverClass}>
      <a nohref className="popover-close" onClick={props.onClose}></a>
      <div className="popover-content">
        {props.children}
      </div>
    </div>
  );
};

PopOver.propTypes = {
  placement: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default PopOver;
