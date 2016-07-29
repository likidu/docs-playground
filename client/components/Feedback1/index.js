import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import { Modal, Overlay } from 'react-overlays';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import FeedbackForm1 from '../FeedbackForm1';

class Feedback1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetExpanded: false,
      showFeedbackPopover: false,
      showFeedbackThank: false,
    };
  }

  setThankState() {
    this.setState({ showFeedbackThank: true });
    // Expire the message in 3 seconds
    setTimeout(() => {
      this.setState({ showFeedbackThank: false });
    }, 3000);
  }

  handleWidgetExpand() {
    this.setState({ widgetExpanded: true });
  }

  handleWidgetCollapse() {
    this.setState({ widgetExpanded: false });
  }

  handleAddVote(type) {
    const { feedback, actions } = this.props;

    if (!feedback.voted) {
      this.setThankState();

      if (type === 'smile') actions.addSmile();
      else if (type === 'frown') {
        // Show popover
        this.setState({ showFeedbackPopover: true });
        actions.addFrown();
      }
    }
  }

  handleShowFeedback(e) {
    this.setState({
      target: e.target,
      showFeedbackPopover: !this.state.showFeedbackPopover,
    });
  }

  handleClickPopoverClose() {
    this.setState({
      showFeedbackPopover: false,
    });
  }

  handleSubmitFeedback() {
    this.setThankState();

    this.props.actions.submitFeedback();
    this.handleClickPopoverClose();
  }

  render() {
    const { feedback, placement, query, smileText, frownText } = this.props;

    const feedbackContainerClass = classNames('level', { expanded: this.state.showFeedbackPopover });
    const feedbackWidgetWidthSteps = feedback.submitted ? 2 : 3;

    const smilesCounts = feedback.voted && feedback.votedOn === 1 ? <strong>{smileText}</strong> : smileText;
    const frownCounts = feedback.voted && feedback.votedOn === 2 ? <strong>{frownText}</strong> : frownText;

    const thank = (
      <VelocityTransitionGroup leave={{ animation: 'fadeOut' }} className="feedback-thank">
        {this.state.showFeedbackThank && <figure>Thanks for the feedback!</figure>}
      </VelocityTransitionGroup>
    );

    // Two more icon variations
    const moreIcon = query.icon === '2' ? 'more2.png' : 'more.png';

    return (
      <div className="feedback">

        <MediaQuery minWidth={980}>
          {thank}

          <VelocityComponent animation={{ width: this.state.widgetExpanded ? `${50 * feedbackWidgetWidthSteps}px` : '50px' }} duration={300}>
            <nav
              ref="feedbackContainer"
              className={feedbackContainerClass}
              onMouseOver={::this.handleWidgetExpand}
              onMouseOut={::this.handleWidgetCollapse}
            >
              <a id="feedback-smiles" nohref className="level-item has-text-centered" onClick={() => this.handleAddVote('smile')}>
                <p className="heading"><img src={require('../../images/smile.png')} alt="Give a smile" /></p>
                <p className="title is-normal is-7">{smilesCounts}</p>
              </a>
              <a id="feedback-frowns" nohref className="level-item has-text-centered" onClick={() => this.handleAddVote('frown')}>
                <p className="heading"><img src={require('../../images/frown.png')} alt="Give a frown" /></p>
                <p className="title is-normal is-7">{frownCounts}</p>
              </a>
              {!feedback.submitted && (
                <a id="feedback-popover" ref="feedback" nohref className="level-item has-text-centered" onClick={::this.handleShowFeedback}>
                  <p className="heading"><img src={require(`../../images/${moreIcon}`)} alt="Tell us more" /></p>
                  <p className="title is-normal is-7">More</p>
                </a>
              )}
            </nav>
          </VelocityComponent>

          <Overlay
            show={this.state.showFeedbackPopover}
            placement={placement}
            container={this}
            target={() => ReactDOM.findDOMNode(this.state.target)}
          >
            <FeedbackForm1
              feedback={feedback}
              placement={placement}
              onSubmit={::this.handleSubmitFeedback}
              onClose={::this.handleClickPopoverClose}
              addVote={(type) => this.handleAddVote(type)}
            />
          </Overlay>
        </MediaQuery>
        <MediaQuery maxWidth={979}>
          {thank}

          <nav
            ref="feedbackContainer"
            className="level"
          >
            <a id="feedback-popover" ref="feedback" nohref className="level-item has-text-centered" onClick={::this.handleShowFeedback}>
              <p className="heading"><img src={require('../../images/smile.png')} alt="Tell us more" /></p>
              <p className="title is-normal is-7">&nbsp;</p>
            </a>
          </nav>

          <Modal
            show={this.state.showFeedbackPopover}
            backdropClassName="feedback-backdrop"
            autoFocus={false}
          >
            <FeedbackForm1
              feedback={feedback}
              placement={placement}
              onSubmit={::this.handleSubmitFeedback}
              onClose={::this.handleClickPopoverClose}
              addVote={(type) => this.handleAddVote(type)}
            />
          </Modal>
        </MediaQuery>
      </div>
    );
  }
}

Feedback1.defaultProps = {
  placement: 'top',
};

Feedback1.propTypes = {
  feedback: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  placement: PropTypes.string,
  query: PropTypes.object,
  smileText: PropTypes.string.isRequired,
  frownText: PropTypes.string.isRequired,
};

export default Feedback1;
