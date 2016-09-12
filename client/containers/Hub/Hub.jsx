import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Breadcrumb from '../../components/Breadcrumb';
import style from './style.css';

import * as CourseActions from '../../actions/course';

class Hub extends Component {
  componentDidMount() {
    this.props.actions.fetchCourses();
  }

  render() {
    return (
      <div>
        <Breadcrumb isPrimary />
        <div className="hub">
          <section className={`hero is-primary ${style.rpi}`}>
            <div className="hero-body is-half">
              <div className="container">
                <h1 className="title">Get started with Raspberry Pi 2/3</h1>
                <h4 className="subtitle">Start your learning journey through Raspberry Pi Starter Kit with this sequenced collection of courses, and understand the extensive and powerful capabilities of Azure Services.</h4>
              </div>
            </div>
            <figure className={`image is-64x64 ${style.logo}`}>
              <img src={require('../../images/microsoft-azure-certified.png')} alt="" />
            </figure>
            <figure className={`image ${style.bg}`}>
              <img src={require('../../images/raspi.png')} alt="" />
            </figure>
          </section>
          <div className="container is-wide">
            <section className={`columns is-multiline ${style.columns}`}>
              <div className="column is-one-third">
                <a href="https://code.visualstudio.com/download" className={`card is-fixed-height ${style.card} ${style.isVscode}`} target="_blank">
                  <div className={`card-image ${style.cardImage}`}>
                    <figure className="image is-128x128">
                      <img src={require('../../images/cloud-computing.png')} alt="" />
                    </figure>
                  </div>
                  <div className={`card-header ${style.cardHeader}`}>
                    <span>Accelerate your IoT development</span>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3>Download Visual Studio Code</h3>
                      <p>Coding, debugging and testing, all in one place. Fuel your IoT development with Visual Studio Code, with handy extensions.</p>
                    </div>
                  </div>
                  <figure className="card-order">
                    <span>0</span>
                  </figure>
                </a>
              </div>
              <div className="column is-one-third">
                <Link to="/set-up-enivornment" className={`card is-fixed-height ${style.card}`}>
                  <div className={`card-image ${style.cardImage}`}>
                    <figure className="image is-128x128">
                      <img src={require('../../images/light-bulb.png')} alt="" />
                    </figure>
                  </div>
                  <div className={`card-header ${style.cardHeader}`}>
                    <span>Time to finish: 15 mins</span>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3>Set up your environment and device</h3>
                      <p>Set up your development environment, assemble and configure your device and get ready to go.</p>
                    </div>
                  </div>
                  <figure className="card-order">
                    <span>1</span>
                  </figure>
                </Link>
              </div>
              <div className="column is-one-third">
                <a href="#" className={`card is-fixed-height ${style.card}`}>
                  <div className={`card-image ${style.cardImage}`}>
                    <figure className="image is-128x128">
                      <img src={require('../../images/cloud-computing.png')} alt="" />
                    </figure>
                  </div>
                  <div className={`card-header ${style.cardHeader}`}>
                    <span>Time to finish: 10 mins</span>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3>Connect your device to Azure IoT</h3>
                      <p>Get started by creating a simple application for your Intel Edison.  You’ll learn how to configure the device, get the tools you need, send/receive messages to the Azure IoT Hub, and store device data in a NoSQL database.</p>
                    </div>
                  </div>
                  <figure className="card-order">
                    <span>2</span>
                  </figure>
                </a>
              </div>
              <div className="column is-one-third">
                <a href="#" className={`card is-fixed-height ${style.card}`}>
                  <div className={`card-image ${style.cardImage}`}>
                    <figure className="image is-128x128">
                      <img src={require('../../images/stats.png')} alt="" />
                    </figure>
                  </div>
                  <div className={`card-header ${style.cardHeader}`}>
                    <span>Time to finish: 12 mins</span>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3>Build real-time analytics</h3>
                      <p>With the basics mastered, you’ll learn how to perform real-time processing of device data.  You’ll create a Stream Analytics job to categorize and filter sensor data based on device location and time.</p>
                    </div>
                  </div>
                  <figure className="card-order">
                    <span>3</span>
                  </figure>
                </a>
              </div>
              <div className="column is-one-third">
                <a href="#" className={`card is-fixed-height ${style.card}`}>
                  <div className={`card-image ${style.cardImage}`}>
                    <figure className="image is-128x128">
                      <img src={require('../../images/thermometer.png')} alt="" />
                    </figure>
                  </div>
                  <div className={`card-header ${style.cardHeader}`}>
                    <span>Time to finish: 24 mins</span>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3>Find temperature anomalies</h3>
                      <p>With the device data processed, you’ll learn how to use machine learning to find temperature anomalies and perform advanced analysis of device data over time.</p>
                    </div>
                  </div>
                  <figure className="card-order">
                    <span>4</span>
                  </figure>
                </a>
              </div>
              <div className="column is-one-third">
                <a href="#" className={`card is-fixed-height ${style.card}`}>
                  <div className={`card-image ${style.cardImage}`}>
                    <figure className="image is-128x128">
                      <img src={require('../../images/folder.png')} alt="" />
                    </figure>
                  </div>
                  <div className={`card-header ${style.cardHeader}`}>
                    <span>Time to finish: 24 mins</span>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3>Configure the frequency and type of data collected</h3>
                      <p>Control what data your device sends to the cloud and how frequently it communicates, configure cloud to device requests for specific data based on triggers.</p>
                    </div>
                  </div>
                  <figure className="card-order">
                    <span>5</span>
                  </figure>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Hub.propTypes = {
  actions: PropTypes.object,
  courses: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CourseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hub);
