import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="header-left">
              <a href="https://docs.microsoft.com" className="header-item">
                <img src="https://assets.onestore.ms/cdnfiles/onestorerolling-1603-16000/shell/v3/images/logo/microsoft.png" alt="" />
              </a>
            </div>
            <div className="header-right">
              <div className="header-item">Right</div>
            </div>
          </div>
        </header>
        <nav className="header">
          <div className="container">
            <div className="header-left">
              <ol className="header-item breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Documentation</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">IoT</a>
                </li>
                <li className="breadcrumb-item">
                  Raspberry Pi 2/3
                </li>
              </ol>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
