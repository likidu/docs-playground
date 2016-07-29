import React from 'react';
import { Element } from 'react-scroll';

const DummyContent = () => (
  <div className="conceptual-body">
    <div className="container is-narrow">
      <aside className="menu social">
        <ol className="menu-list social-actions">
          <li className="menu-theme">
            <div className="control">
              <span className="select">
                <select name="theme-selector" id="theme-selector">
                  <option value="">Light</option>
                  <option value="">Dark</option>
                </select>
              </span>
            </div>
          </li>

          <li>
            <a href="#" className="button is-primary is-small">
              <i className="icon icon-comments"></i>Comments
            </a>
          </li>
          <li>
            <a href="" className="button is-primary is-small">
              <i className="icon icon-edit"></i>Edit
            </a>
          </li>

        </ol>
      </aside>

      <article className="conceptual-content" id="main" role="main">
        <h1 id="install-ata">Set up environment and device</h1>
        <div id="metadata">
          <a href="" className="avatar" title=""><span className="author-name" alt="Author Name"></span></a>
          <div className="info">
            <span className="name"><a href=""></a></span>
            <div className="meta">
              <time dateTime="" className="date"></time>
              <time dateTime="" className="reading-time">11 min to read</time>
            </div>
          </div>
        </div>

        <h5>Choose your platform</h5>
        <p className="control">
          <span className="select is-small">
            <select name="" id="">
              <option value="windows">Windows 7 or above</option>
              <option value="macos" selected>OSX 10.10 or above</option>
              <option value="linux">Linux (Ubuntu, Debian and Fedora)</option>
            </select>
          </span>
        </p>

        <div className="content">

          <Element name="config-device" className="conceptual-item">
            <h2>Configure your device</h2>
            <p>In this section we’ll walk through the first-time setup of your Intel Edison.  If you are familiar with the Intel Edison and already have an Azure subscription, you may wish to proceed to <a href="#">Deploy the application to your device.</a></p>
            <ol>
              <li>
                <a href="#">Create your free Azure account with $200 in credit to get started</a>
              </li>
              <li>
                <a href="#">Assemble your board</a>
              </li>
              <li>
                <a href="#">Install device tools</a>
              </li>
              <li>
                <a href="#">Connect the device to your development machine</a>
              </li>
              <li>
                <a href="#">Add an LED to the board</a>
              </li>
              <li>
                <a href="#">Power on the device</a>
              </li>
            </ol>
          </Element>

          <Element name="get-the-tools" className="conceptual-item">
            <h2>Get the tools</h2>
            <p>Please first select the platform you want to build your applications on and proceed the steps.</p>

            <h4>Install VS Code</h4>
            <p>This tutorial uses <a href="#">Visual Studio Code</a> for code editing.  If you do not have Visual Studio Code installed, download it here</p>
            <p><a href="https://code.visualstudio.com/download" className="button is-primary is-medium">Get Visual Studio Code</a></p>

            <h4>Install Brew</h4>
            <p>Brew is a well-known adn widely used package management system for OS X. You need to install it first in order to install other packages like Node.js.</p>
            <p>To install it, paste that at a Terminal prompt.</p>
            <pre>
              <code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>
            </pre>

            <h4>Install Node.js</h4>
            <p>Once you have Brew installed, simply use it to install Node.js.</p>
            <pre>
              <code>brew install node</code>
            </pre>

            <h4>Install utilities</h4>
            <p>We’ll use gulp to deploy code to the device and yeoman to scaffold the device. Install them with npm (Node Package Managment tool).</p>
            <pre>
              <code>npm install i –g gulp yo az-iot-generator</code>
            </pre>

            <h4>Install the Azure CLI</h4>
            <p>The Azure IoT Hub will be created with the Azure CLI.</p>
            <pre>
              <code>brew install azure-cli</code>
            </pre>
          </Element>

          <Element name="deploy-first-app" className="conceptual-item">
            <h2>Deploy your first app</h2>
            <p>Describe the purpose of it.</p>

            <h4>Clone the sample</h4>
            <p>To get started, we’ll use a simple application that blinks an LED on the Intel Edison. [TODO: Is installation of Git a prerequisition?</p>
            <pre>
              <code>git clone https://github.com/azure/iot-starter-kit-edison-node.git</code>
            </pre>

            <h4>Install application dependencies</h4>
            <p>Next we will install the sensor libraries and other modules needed for the sample.</p>
            <pre>
              <code>cd azure-iot-starter-kit-edison-node && npm install --save</code>
            </pre>

            <h4>Configure the device connection</h4>
            <p>We will deploy the sample to your device using gulp.  To do that, we need update config.js with hostname and credentials for your device. [TODO: Add code snippet for React component], [TODO: What you should now see is]</p>
            <pre>
              <code>
                module.exports = {

                }
              </code>
            </pre>

            <h4>Install Node.js on the device</h4>
            <p>Before we can run our application, we need to install NodeJS library on the Intel Edison device.  We will do that using gulp.</p>
            <pre>
              <code>gulp install-pkgs</code>
            </pre>

            <h4>Deploy your application</h4>
            <p>Now we’re ready to deploy and run the application to on the Raspberry Pi 2/3.</p>
            <pre>
              <code>gulp deploy && gulp run</code>
            </pre>

            <h4>Verify the application is working</h4>
            <p>You should see the LED on your device blinking every five seconds.  If you don’t see the <a href="#">Troubleshooting</a> guide for solutions to common problems.</p>
          </Element>

          <Element name="troubleshooting" className="conceptual-item">
            <h2>Troubleshooting</h2>
            <p>If you find any problems, go to here.</p>
          </Element>

          <Element name="see-also" className="conceptual-item">
            <h2 id="see-also">See Also</h2>
            <p>
              <a href="https://social.technet.microsoft.com/Forums/security/en-US/home?forum=mata">For support, check out our forum!</a>
              <a href="ATA_Deployment_Guide.html">Configure Event Collection</a>
              <a href="ATA_Deployment_Guide.html">ATA Prerequisites</a>
            </p>
          </Element>
        </div>

      </article>
    </div>
  </div>
);

export default DummyContent;
