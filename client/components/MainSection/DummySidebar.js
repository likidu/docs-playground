import React from 'react';

const DummySidebar = () => (
  <aside id="sidebar" className="sidebar conceptual-toc">
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-items is-level-0">
        <li>
          <a href="#" className="sidebar-nav-item">Get Started</a>
          <ul className="sidebar-nav-items is-level-1">
            <li>
              <a href="#" className="sidebar-nav-item">Set up environment and device</a>
              <ul className="sidebar-nav-items is-level-2">
                <li>
                  <a href="#" className="sidebar-nav-item">Configure your device</a>
                </li>
                <li>
                  <a href="#" className="sidebar-nav-item">Get the tools</a>
                </li>
                <li>
                  <a href="#" className="sidebar-nav-item">Deploy your first app</a>
                </li>
                <li>
                  <a href="#" className="sidebar-nav-item">Troubleshooting</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="sidebar-nav-item">Connect your device to Azuure IoT</a>
            </li>
            <li>
              <a href="#" className="sidebar-nav-item">Build real-time analytics</a>
            </li>
            <li>
              <a href="#" className="sidebar-nav-item">Find temperature anomalies</a>
            </li>
            <li>
              <a href="#" className="sidebar-nav-item">Configure the frequencey and type of data collected</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="sidebar-nav-item">Plan & Design</a>
        </li>
        <li>
          <a href="#" className="sidebar-nav-item">Deploy & Use the Service</a>
        </li>
        <li>
          <a href="#" className="sidebar-nav-item">Develop & Customize Apps</a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default DummySidebar;
