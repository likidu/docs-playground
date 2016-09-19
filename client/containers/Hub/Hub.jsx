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
    const { courses } = this.props;

    return (
      <div>
        <Breadcrumb isPrimary />
        <div className="hub">
          <section className={`hero is-primary ${style.rpi}`}>
            <div className="hero-body is-half">
              <div className="container">
                <h1 className="title">Azure IoT Starter Kit Courses</h1>
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
          <article className="container is-wide">
            <section className={style.courseListTitle}>
              <h3>{courses.length} Courses</h3>
            </section>
            <section className={`columns is-multiline ${style.columns}`}>
              {courses.map((course, idx) => {
                return (
                <div key={idx} className="column is-one-third">
                  <section className={`card is-fixed-height ${style.card}`}>
                    <div className={`card-header ${style.cardHeader}`}>
                      <div className="card-caption">
                        <span className="title is-7">{course.level}</span>
                        <span className="title is-7">{course.time} mins</span>
                      </div>
                      <div className={`card-image ${style.cardImage}`}>
                        <figure className="image is-64x64">
                          <img src={`../../images/${course.icon}`} alt="" />
                        </figure>
                      </div>
                      <div className="title is-5">{course.title}</div>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>{course.brief}</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className={style.lessonProgress}>
                        <span>
                          { course.locked && <img src="../../images/icon-lock.png" /> }
                          { !course.locked && <img src="../../images/icon-unlock.png" /> }
                        </span>
                        <progress className="progress is-info" value={course.currentLesson} max={course.lessons}>%</progress>
                        <span className={style.lessonProgressText}><strong>{course.currentLesson}</strong> of <strong>{course.lessons}</strong> lessons</span>
                      </div>
                      <Link to="/set-up-enivornment" className={`button is-primary is-fullwidth ${style.startButton}`}>Start Course</Link>
                    </div>
                  </section>
                </div>
                );
              })}
            </section>
          </article>
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
    courses: state.hub.courses,
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
