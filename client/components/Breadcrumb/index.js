import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Breadcrumb = (props) => {
  const color = classnames({ 'is-primary': props.isPrimary });

  return (
    <nav className={`nav ${color} has-shadow`}>
      <div className="container">
        <ol className={`nav-item breadcrumb ${color}`}>
          <li className="breadcrumb-item">
            <a href="#">Azure IoT</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Starter Kits</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="is-active">Raspberry Pi 2/3</a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

Breadcrumb.propTypes = {
  isPrimary: PropTypes.bool,
};

export default Breadcrumb;
