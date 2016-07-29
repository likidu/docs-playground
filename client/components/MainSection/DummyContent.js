import React from 'react';

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

        <aside className="intopic-toc">
          <h6>In this article</h6>
        </aside>

        <div><div className="content">

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

          <h2>Get the tools</h2>
          <p>Please first select the platform you want to build your applications on and proceed the steps.</p>

          <h4>Install VS Code</h4>
          <p>This tutorial uses <a href="#">Visual Studio Code</a> for code editing.  If you do not have Visual Studio Code installed, download it here: [TODO: Add download button]</p>

          <h4>Install Brew</h4>
          <p>Brew is a well-known adn widely used package management system for OS X. You need to install it first in order to install other packages like Node.js.</p>
          <p>To install it, paste that at a Terminal prompt. [TODO: Fix code style here]</p>
          <code>
            <pre>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</pre>
          </code>

          <h4>Install Node.js</h4>
          <p>Once you have Brew installed, simply use it to install Node.js.</p>
          <code>
            <pre>brew install node</pre>
          </code>

          <h4>Install utilities</h4>
          <p>We’ll use gulp to deploy code to the device and yeoman to scaffold the device. Install them with npm (Node Package Managment tool).</p>
          <code>
            <pre>npm install i –g gulp yo az-iot-generator</pre>
          </code>

          <h4>Install the Azure CLI</h4>
          <p>The Azure IoT Hub will be created with the Azure CLI.</p>
          <code>
            <pre>brew install azure-cli</pre>
          </code>


          <h2>Deploy your first app</h2>
          <p>Describe the purpose of it.</p>

          <h4>Clone the sample</h4>
          <p>To get started, we’ll use a simple application that blinks an LED on the Intel Edison. [TODO: Is installation of Git a prerequisition?</p>
          <code>
            <pre>git clone https://github.com/azure/iot-starter-kit-edison-node.git</pre>
          </code>

          <h4>Install application dependencies</h4>
          <p>Next we will install the sensor libraries and other modules needed for the sample.</p>
          <code>
            <pre>cd azure-iot-starter-kit-edison-node && npm install --save</pre>
          </code>

          <h4>Configure the device connection</h4>
          <p>We will deploy the sample to your device using gulp.  To do that, we need update config.js with hostname and credentials for your device. [TODO: Add code snippet for React component], [TODO: What you should now see is]</p>
          <code>
            <pre>
              module.exports = {

              }
            </pre>
          </code>

          <h4>Install Node.js on the device</h4>
          <p>Before we can run our application, we need to install NodeJS library on the Intel Edison device.  We will do that using gulp.</p>
          <code>
            <pre>gulp install-pkgs</pre>
          </code>

          <h4>Deploy your application</h4>
          <p>Now we’re ready to deploy and run the application to on the Raspberry Pi 2/3.</p>
          <code>
            <pre>gulp deploy && gulp run</pre>
          </code>

          <h4>Verify the application is working</h4>
          <p>You should see the LED on your device blinking every five seconds.  If you don’t see the <a href="#">Troubleshooting</a> guide for solutions to common problems.</p>



          <h2 id="-a-name-preinstallsteps-a-pre-installation-steps"><a name="Preinstallsteps"></a>Pre-installation steps</h2>
          <ol>
            <li><p>If you installed the ATA public preview version, see <a href="ATA_Deployment_Guide.html">ATA Release Notes</a> for help uninstalling the ATA Preview version.</p>
            </li>
            <li><p>Install KB2934520 on the ATA Center server and on the ATA Gateway servers before beginning installation, otherwise the ATA installation will install this update and will require a restart in the middle of the ATA installation.</p>
            </li>
          </ol>
          <h2 id="-a-name-installatactr-a-step-1-download-and-install-the-ata-center"><a name="InstallATACtr"></a>Step 1. Download and Install the ATA Center</h2>
          <p>After you have verified that the server meets the requirements, you can proceed with the installation of the ATA Center.</p>
          <p>Perform the following steps on the ATA Center server.</p>
          <ol>
            <li><p>Download ATA from the <a href="http://www.microsoft.com/en-us/evalcenter/">TechNet Evaluation Center</a>.</p>
            </li>
            <li><p>Log in with a user who is a member of the local administrators group.</p>
            </li>
            <li><p>From an elevated command prompt, run Microsoft ATA Center Setup.EXE and follow the setup wizard.</p>
            </li>
            <li><p>On the <strong>Welcome</strong> page, select your language and click <strong>Next</strong>.</p>
            </li>
            <li><p>Read the End User License Agreement and if you accept the terms, click <strong>Next</strong>.</p>
            </li>
            <li><p>On the <strong>Center Configuration</strong> page, enter the following information based on your environment:</p>
              <table>
                <thead>
                  <tr>
                    <th>Field <br /> <br /></th>
                    <th>Description <br /> <br /></th>
                    <th>Comments <br /> <br /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Installation Path <br /> <br /></td>
                    <td>This is the location where the ATA Center will be installed. By default this is  %programfiles%\Microsoft Advanced Threat Analytics\Center <br /> <br /></td>
                    <td>Leave the default value <br /> <br /></td>
                  </tr>
                  <tr>
                    <td>Database Data Path <br /> <br /></td>
                    <td>This is the location where the MongoDB database files will be located. By default this is %programfiles%\Microsoft Advanced Threat Analytics\Center\MongoDB\bin\data <br /> <br /></td>
                    <td>
                      Change the location to a place where you have room to grow based on your sizing.
                      <strong>Note:</strong> <ul><li>In production environments you should use a drive that has enough space based on capacity planning. </li><li>For large deployments the database should be on a separate physical disk. </li> </ul>See <a href="ATA_Deployment_Guide.html">ATA Capacity Planning</a> for sizing information. <br /></td>
                  </tr>
                  <tr>
                    <td>Database Journal Path <br /> <br /></td>
                    <td>This is the location where the database journal files will be located. By default this is %programfiles%\Microsoft Advanced Threat Analytics\Center\MongoDB\bin\data\journal <br /> <br /></td>
                    <td>For large deployments, the Database Journal should be on a separate physical disk from the database and the system drive. Change the location to a place where you have room for your Database Journal. <br /> <br /></td>
                  </tr>
                  <tr>
                    <td>ATA Center Service IP address: Port <br /> <br /></td>
                    <td>This is the IP address that the ATA Center service will listen on for communication from the ATA Gateways. <br /> <br /><strong>Default port:</strong> 443 <br /> <br /></td>
                    <td>Click the down arrow to select the IP address to be used by the ATA Center service. <br /> <br />The IP address and port of the ATA Center service cannot be the same as the IP address and port of the ATA Console. Make sure to change the port of the ATA Console. <br /> <br /></td>
                  </tr>
                  <tr>
                    <td>ATA Center Service SSL Certificate <br /> <br /></td>
                    <td>This is the certificate that will be used by the ATA Center service. <br /> <br /></td>
                    <td>Click the key icon to select a certificate installed or check self-signed certificate when deploying in a lab environment. <br /> <br /></td>
                  </tr>
                  <tr>
                    <td>ATA Console IP address <br /> <br /></td>
                    <td>This is the IP address that will be used by IIS for the ATA Console. <br /> <br /></td>
                    <td>Click the down arrow to select the IP address used by the ATA Console. <strong>Note:</strong> Make a note of this IP address to make it easier to access the ATA Console from the ATA Gateway. <br /></td>
                  </tr>
                  <tr>
                    <td>ATA Console SSL certificate <br /> <br /></td>
                    <td>This is the certificate to be used by IIS. <br /> <br /></td>
                    <td>Click the key icon to select a certificate installed or check self-signed certificate when deploying in a lab environment. <br /> <br /></td>
                  </tr>
                </tbody>
              </table>
              <p><img src={require('../../images/ATA_Center_Configuration.jpg')} alt="" /></p>
            </li>
            <li><p>Click <strong>Install</strong> to install ATA and its components and create the connection between the ATA Center and the ATA Console.</p>
            </li>
            <li><p>When the installation completes, click <strong>Launch</strong>  to connect to the ATA Console.</p>
              <p>The following components are installed and configured during the installation of ATA Center:</p>
              <ul>
                <li><p>Internet Information Services (IIS)</p>
                </li>
                <li><p>MongoDB</p>
                </li>
                <li><p>ATA Center service and ATA Console IIS site</p>
                </li>
                <li><p>Custom Performance Monitor data collection set</p>
                </li>
                <li><p>Self-signed certificates (if selected during the installation)</p>
                </li>
              </ul>
            </li>
          </ol>
          <div className="NOTE"><h5>NOTE</h5><p>To help in troubleshooting and product enhancement, it is recommended that you install MongoVue and any other MongoDB add-in, or any other third-party tool of your choice. MongoVue requires .Net Framework 3.5 to be installed.</p>
          </div>
          <h3 id="validate-installation">Validate installation</h3>
          <ol>
            <li><p>Check to see that the Microsoft Advanced Threat Analytics Center service is running.</p>
            </li>
            <li><p>On the desktop click the Microsoft Advanced Threat Analytics shortcut to connect to the ATA Console. Log in with the same user credentials that you used to
              install the ATA Center. The first time you log into the ATA Console you will be brought automatically to the <strong>Domain connectivity settings</strong> page to continue the configuration and the deployment of the ATA Gateways.</p>
            </li>
            <li><p>Review the error file in the <strong>Microsoft.Tri.Center-Errors.log</strong> file which can be found in the following default location: %programfiles%\Microsoft Advanced Threat Analytics\Center\Logs.</p>
            </li>
          </ol>
          <h2 id="-a-name-configconsettings-a-step-2-configure-ata-gateway-domain-connectivity-settings"><a name="ConfigConSettings"></a>Step 2. Configure ATA Gateway domain connectivity settings</h2>
          <p>The settings in the domain connectivity settings section apply to all ATA Gateways managed by the ATA Center.</p>
          <p>To configure the Domain connectivity settings perform the following on the ATA Center server.</p>
          <ol>
            <li><p>Open the ATA Console and log in. For instructions see <a href="ATA_Deployment_Guide.html">Working with the ATA Console</a>.</p>
            </li>
            <li><p>The first time you log into the ATA Console after the ATA Center has been installed, you will automatically be taken to the ATA Gateways configuration page. If you need to modify any of the settings afterwards, click the Settings icon and select <strong>Configuration</strong>.</p>
            <p><img src={require('../../images/ATA_config_icon.jpg')} alt="" /></p>
            </li>
            <li><p>On the <strong>Gateways</strong> page, click on <strong>Domain connectivity settings</strong>, enter the following information and click <strong>Save</strong>.</p>
              <table>
                <thead>
                  <tr>
                    <th>Field <br /> <br /></th>
                    <th>Comments <br /> <br /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Username</strong> (required) <br /> <br /></td>
                    <td>Enter the read-only user name, for example: <strong>user1</strong>. <br /> <br /></td>
                  </tr>
                  <tr>
                    <td><strong>Password</strong> (required) <br /> <br /></td>
                    <td>Enter the password for the read-only user, for example: <strong>Pencil1</strong>. <strong>Note:</strong> Make sure this password is correct. If you save the wrong password, the ATA Service will stop running on the ATA Gateway servers. <br /></td>
                  </tr>
                  <tr>
                    <td><strong>Domain</strong> (required) <br /> <br /></td>
                    <td>Enter the domain for the read-only user, for example, <strong>contoso.com</strong>. <strong>Note:</strong> It is important that you enter the complete FQDN of the domain where the user is located. For example, if the user’s account is in domain corp.contoso.com, you need to enter <code>corp.contoso.com</code> not contoso.com <br /></td>
                  </tr>
                </tbody>
              </table>
              <p><img src={require('../../images/ATA_Domain_Connectivity_User.jpg')} alt="" /></p>
            </li>
          </ol>
          <h2 id="-a-name-downloadata-a-step-3-download-the-ata-gateway-setup-package"><a name="DownloadATA"></a>Step 3. Download the ATA Gateway setup package</h2>
          <p>After configuring the domain connectivity settings you can download the ATA Gateway setup package.</p>
          <p>To download the ATA Gateway package:</p>
          <ol>
            <li><p>On the ATA Gateway machine, open a browser and enter the IP address you configured in the ATA Center for the ATA Console. When the ATA Console opens, click on the settings icon and select <strong>Configuration</strong>.</p>
            <p><img src={require('../../images/ATA_config_icon.jpg')} alt="" /></p>
            </li>
            <li><p>In the <strong>ATA Gateways</strong> tab, click <strong>Download ATA Gateway Setup</strong>.</p>
            </li>
            <li><p>Save the package locally.</p>
            </li>
          </ol>
          <p>The zip file includes the following:</p>
          <ul>
            <li><p>ATA Gateway installer</p>
            </li>
            <li><p>Configuration setting file with the required information to connect to the ATA Center</p>
            </li>
          </ul>
          <h2 id="-a-name-installatagw-a-step-4-install-the-ata-gateway"><a name="InstallATAGW"></a>Step 4. Install the ATA Gateway</h2>
          <p>Before installing the ATA Gateway, validate that port mirroring is properly configured and that the ATA Gateway can see traffic to and from the domain controllers. See <a href="ATA_Deployment_Guide.html">Validate Port Mirroring</a> for more information.</p>
          <div className="IMPORTANT"><h5>IMPORTANT</h5><p>Make sure that <a href="http://support.microsoft.com/kb/2919355/">KB2919355</a> has been installed.  Run the following PowerShell cmdlet to check if the hotfix is installed:</p>
            <p><code>Get-HotFix -Id kb2919355</code></p>
          </div>
          <p>Perform the following steps on the ATA Gateway server.</p>
          <ol>
            <li><p>Extract the files from the zip file.</p>
            </li>
            <li><p>From an elevated command prompt, run Microsoft ATA Gateway Setup.exe and follow the setup wizard.</p>
            </li>
            <li><p>On the <strong>Welcome</strong> page, select your language and click <strong>Next</strong>.</p>
            </li>
            <li><p>Under  <strong>ATA Gateway Configuration</strong>, enter the following information based on your environment:</p>
              <p><img src={require('../../images/ATA_Gateway_Configuration.jpg')} alt="" /></p>
              <table>
                <thead>
                  <tr>
                    <th>Field <br /> <br /></th>
                    <th>Description <br /> <br /></th>
                    <th>Comments <br /> <br /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Installation Path <br /> <br /></td>
                    <td>This is the location where the ATA Gateway will be installed. By default this is  %programfiles%\Microsoft Advanced Threat Analytics\Gateway <br /> <br /></td>
                    <td>Leave the default value <br /> <br /></td>
                  </tr>
                  <tr>
                    <td>ATA Gateway Service SSL certificate <br /> <br /></td>
                    <td>This is the certificate that will be used by the ATA Gateway. <br /> <br /></td>
                    <td>Use a self-signed certificate for lab environments only. <br /> <br /></td>
                  </tr>
                  <tr>
                    <td>ATA Gateway Registration <br /> <br /></td>
                    <td>Enter the Username and Password of the ATA administrator. <br /> <br /></td>
                    <td>For the ATA Gateway to register with the ATA Center, enter the user name and password of the user who
                      installed the ATA Center. This user must be a member of one of the following local groups on the ATA Center. <br /> <br /><ul><li>Administrators </li><li>Microsoft Advanced Threat Analytics Administrators </li> </ul> <strong>Note:</strong> These credentials are used only for registration and are not stored in ATA. <br /></td>
                  </tr>
                </tbody>
              </table>
              <p>The following components are installed and configured during the installation of the ATA Gateway:</p>
              <ul>
                <li><p>KB 3047154</p>
                  <div className="IMPORTANT"><h5>IMPORTANT</h5><ul>
                    <li>Do not install KB 3047154 on a virtualization host. This may cause port mirroring to stop working properly.</li>
                    <li>Do not install Message Analyzer, Wireshark, or other network capture software on the ATA Gateway. If you need to capture network traffic, install and use Microsoft Network Monitor 3.4.</li>
                  </ul>
                </div>
              </li>
              <li><p>ATA Gateway service</p>
              </li>
              <li><p>Microsoft Visual C++ 2013 Redistributable</p>
              </li>
              <li><p>Custom Performance Monitor data collection set</p>
              </li>
            </ul>
          </li>
          <li><p>After the installation completes, click <strong>Launch</strong>  to open your browser and log in to the ATA Console.</p>
          </li>
        </ol>
        <h3 id="-a-name-configatagw-a-step-5-configure-the-ata-gateway-settings"><a name="ConfigATAGW"></a>Step 5. Configure the ATA Gateway settings</h3>
        <p>After the ATA Gateway was installed, perform the following steps to configure the settings for the ATA Gateway.</p>
        <ol>
          <li><p>On the ATA Gateway machine, in the ATA Console, click on the <strong>Configuration</strong> and select the <strong>ATA Gateways</strong> page.</p>
          </li>
          <li><p>Enter the following information.</p>
            <table>
              <thead>
                <tr>
                  <th>Field <br /> <br /></th>
                  <th>Description <br /> <br /></th>
                  <th>Comments <br /> <br /></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Description <br /> <br /></td>
                  <td>Enter a description of the ATA Gateway (optional). <br /> <br /></td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>Domain controllers</strong> (required) <br /> <br />See below for additional information about the list of controllers. <br /> <br /></td>
                  <td>Enter the complete FQDN of your domain controller and click the plus sign to add it to the list. For example,  <strong>dc01.contoso.com</strong> <br /> <br /></td>
                  <td>The objects in the first domain controller in the list will sync via LDAP queries. Depending on the size of the domain, this might take some time. <strong>Note:</strong> <ul><li>Make sure that the first domain controller is <strong>not</strong> read-only.   Read only domain controllers should be added only after the initial sync completes. </li> </ul> <br /></td>
                </tr>
                <tr>
                  <td><strong>Capture Network adapters</strong> (required) <br /> <br /></td>
                  <td>Select the network adapters that are connected to the switch that are configured as the destination mirror port to receive the domain controller traffic. <br /> <br /></td>
                  <td>Select the Capture network adapter. <br /> <br /></td>
                </tr>
              </tbody>
            </table>
            <p><img src={require('../../images/ATA_Config_GW_Settings.jpg')} alt="" /></p>
          </li>
          <li><p>Click <strong>Save</strong>.</p>
            <div className="NOTE"><h5>NOTE</h5><p>It will take a few minutes for the ATA Gateway service to start the first time because it builds the cache of the network capture parsers used by the ATA Gateway.</p>
            </div>
          </li>
        </ol>
        <p>The following information applies to the servers you enter in the <strong>Domain Controllers</strong> list.</p>
        <ul>
          <li><p>The first domain controller in the list will be used by the ATA Gateway to sync the objects in the domain via LDAP queries. Depending on the size of the domain, this might take some time.</p>
          </li>
          <li><p>All domain controllers whose traffic is being monitored via port mirroring by the ATA Gateway must be listed in the <strong>Domain Controllers</strong> list. If a domain controller is not listed in the <strong>Domain Controllers</strong> list, detection of suspicious activities might not function as expected.</p>
          </li>
          <li><p>Make sure that the first domain controller is <strong>not</strong> a read-only domain controller (RODC).</p>
            <p> Read only domain controllers should be added only after the initial sync completes.</p>
          </li>
          <li><p>At least one domain controller in the list be a global catalog server. This will enable ATA to resolve computer and user objects in other domains in the forest.</p>
          </li>
        </ul>
        <p>The configuration changes will be applied to the ATA Gateway on the next scheduled sync between the ATA Gateway and the ATA Center.</p>
        <h3 id="validate-installation-">Validate installation:</h3>
        <p>To validate that the ATA Gateway has been successfully deployed, check the following:</p>
        <ol>
          <li><p>Check that the Microsoft Advanced Threat Analytics Gateway service is running. After you have saved the ATA Gateway settings, it might take a few minutes for the service to start.</p>
          </li>
          <li><p>If the service does not start, review the “Microsoft.Tri.Gateway-Errors.log” file located in the following default folder, “%programfiles%\Microsoft Advanced Threat Analytics\Gateway\Logs”, search for entries with “transfer” or “service start”.</p>
          </li>
          <li><p>Check the following Microsoft ATA Gateway performance counters:</p>
            <ul>
              <li><p><strong>NetworkListener Captured Messages / sec</strong>: This counter tracks how many messages are being captured by the ATA per second. The value should be mid hundreds to thousands depending on the number of domain controllers being monitored and how busy each domain controller is. Single or double digit values can indicate an issue with the port mirroring configuration.</p>
              </li>
              <li><p><strong>EntityTransfer Activity Transfers/Sec</strong>: This value should be in the range of a few hundred every few seconds.</p>
              </li>
            </ul>
          </li>
          <li><p>If this is the first ATA Gateway installed, after a few minutes, log into the ATA Console and open the notification pane by swiping the right side of the screen open. You should see a list of <strong>Entities Recently Learned</strong> in the notification bar on the right side of the console.</p>
          </li>
          <li><p>To validate that the installation completed successfully:</p>
            <p>In the console, search for something in the search bar, such as a user or a group on your domain.</p>
            <p>Open Performance Monitor. In the Performance tree, click on <strong>Performance Monitor</strong> and then click the plus icon to <strong>Add a Counter</strong>. Expand <strong>Microsoft ATA Gateway</strong> and scroll down to <strong>Network Listener Captured Messages per Second</strong> and add it. Then, make sure you see activity on the graph.</p>
            <p><img src={require('../../images/ATA_performance_monitoring_add_counters.png')} alt="" /></p>
          </li>
        </ol>
        <h3><a name="ATAvpnHoneytokensetting"></a>Step 6. Configure short-term lease subnets and Honeytoken user</h3>
        <p>Short-term lease subnets are subnets in which the IP address assignment changes very rapidly - within seconds or minutes. For example, IP addresses used for your VPNs and Wi-Fi IP addresses. To enter the list of short-term lease subnets used in your organization, follow these steps:</p>
        <ol>
          <li><p>From the ATA Console on the ATA Gateway machine, click on the settings icon and select <strong>Configuration</strong>.</p>
          <p><img src={require('../../images/ATA_performance_monitoring_add_counters.png')} alt="" /></p>
          </li>
          <li><p>Under <strong>Detection</strong>, enter the following for short-term lease subnets. Enter the short-term lease subnets using slash notation format, for example:  <code>192.168.0.0/24</code> and click the plus sign.</p>
          </li>
          <li><p>For the Honeytoken account SIDs, enter the SID for the user account that will have no network activity, and click the plus sign. For example: <code>S-1-5-21-72081277-1610778489-2625714895-10511</code>.</p>
            <div className="NOTE"><h5>NOTE</h5><p>To find the SID for a user, run the following Windows PowerShell cmdlet <code>Get-ADUser UserName</code>.</p>
            </div>
          </li>
          <li><p>Configure exclusions: You can configure IP addresses to be excluded from specific suspicious activities. See <a href="ATA_Deployment_Guide.html">Working with ATA Detection Settings</a> for more information.</p>
          </li>
          <li><p>Click <strong>Save</strong>.</p>
          </li>
        </ol>
        <p><img src={require('../../images/ATA_VPN_Subnets.jpg')} alt="" /></p>
        <p>Congratulations, you have successfully deployed Microsoft Advanced Threat Analytics!</p>
        <p>Check the attack time line to view detected suspicious activities and search for users or computers and view their profiles.</p>
        <p>Remember that it takes a minimum of three weeks for ATA to build behavioral profiles, so during the first three weeks you will not see any  suspicious behavior activities.</p>
        <h2 id="see-also">See Also</h2>
        <p><a href="https://social.technet.microsoft.com/Forums/security/en-US/home?forum=mata">For support, check out our forum!</a>
          <a href="ATA_Deployment_Guide.html">Configure Event Collection</a>
          <a href="ATA_Deployment_Guide.html">ATA Prerequisites</a></p>
        </div></div>


      </article>
    </div>
  </div>
);

export default DummyContent;
