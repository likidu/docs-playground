import React from 'react';
import { Link, DirectLink } from 'react-scroll';

const DummySidebar = () => (
  <aside id="sidebar" className="sidebar conceptual-toc">
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-items is-level-0">
        <li>
          <a href="#" className="sidebar-nav-item">Get Started</a>
          <ul className="sidebar-nav-items is-level-1">
            <li>
              <a href="#" className="sidebar-nav-item">Set up environment and device</a>
              <h6 className="sidebar-nav-ita">In this article</h6>
              <ul className="sidebar-nav-items is-level-2">
                <li>
                  <Link to="config-device" spy smooth duration={500} activeClass="is-selected" className="sidebar-nav-item">Configure your device</Link>
                </li>
                <li>
                  <DirectLink to="get-the-tools" spy smooth duration={500} activeClass="is-selected" className="sidebar-nav-item">Get the tools</DirectLink>
                </li>
                <li>
                  <DirectLink to="deploy-first-app" spy smooth duration={500} activeClass="is-selected" className="sidebar-nav-item">Deploy your first app</DirectLink>
                </li>
                <li>
                  <DirectLink to="troubleshooting" spy smooth duration={500} activeClass="is-selected" className="sidebar-nav-item">Troubleshooting</DirectLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="sidebar-nav-item">Connect your device to Azure IoT</a>
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
