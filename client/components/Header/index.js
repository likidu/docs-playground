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
          <div className="container">
            <div className="nav-left">
              <a href="#" className="nav-item is-tab">Why Azure</a>
              <a href="#" className="nav-item is-tab">Solutions</a>
              <a href="#" className="nav-item is-tab">Products</a>
              <a href="#" className="nav-item is-tab is-active">Documentation</a>
              <a href="#" className="nav-item is-tab">Pricing</a>
              <a href="#" className="nav-item is-tab">Partners</a>
              <a href="#" className="nav-item is-tab">Blog</a>
              <a href="#" className="nav-item is-tab">Resources</a>
              <a href="#" className="nav-item is-tab">Support</a>
            </div>
          </div>
        </header>
        <nav className="nav has-shadow">
          <div className="container">
            <ol className="nav-item breadcrumb">
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
        </nav>
      </div>
    );
  }
}

export default Header;
