import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Modal, Overlay } from 'react-overlays';
import { VelocityTransitionGroup } from 'velocity-react';
import FeedbackForm1 from '../FeedbackForm1';

class Feedback3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFeedbackContainer: true,
      showFeedbackPopover: false,
      showFeedbackThank: false,
    };
  }

  onClose() {
    this.setState({
      showFeedbackContainer: false,
    });
  }

  setThankState() {
    this.setState({ showFeedbackThank: true });
    // Expire the message in 1 seconds
    setTimeout(() => {
      this.setState({ showFeedbackThank: false });
    }, 3000);
  }

  handleAddVote(type) {
    const { feedback, actions } = this.props;

    if (!feedback.voted) {
      if (type === 'smile') actions.addSmile();
      else if (type === 'frown') {
        // Shows popover directly
        this.setState({ showFeedbackPopover: true });
        actions.addFrown();
      }
    }
  }

  handleShowFeedback(e) {
    this.setState({
      target: e.target,
      showFeedbackPopover: !this.state.showFeedbackPopover,
      showFeedbackContainer: false,
    });
  }

  handleClickPopoverClose() {
    this.setState({
      showFeedbackPopover: false,
      showFeedbackContainer: true,
    });
  }

  handleSubmitFeedback() {
    this.setThankState();
    this.handleClickPopoverClose();
    this.onClose();

    this.props.actions.submitFeedback();
  }

  renderWidgetContent() {
    const { feedback } = this.props;

    if (feedback.voted && feedback.votedOn === 1) {
      return (
        <nav className="level">
          <p className="level-item" style={{ marginBottom: 0 }}>
            Please <a nohref onClick={::this.handleShowFeedback}>tell us more.</a>
          </p>
        </nav>
      );
    }

    return (
      <nav className="level">
        <p className="level-item" style={{ marginBottom: 0 }}>
          <a
            nohref
            className="button is-primary is-small-wide"
            onClick={() => this.handleAddVote('smile')}
          >
          Yes
          </a>
        </p>
        <p className="level-item" style={{ marginBottom: 0 }}>
          <a
            nohref
            className="button is-primary is-small-wide"
            onClick={() => this.handleAddVote('frown')}
          >
          No
          </a>
        </p>
        <p className="level-item" style={{ marginBottom: 0 }}>
          <a nohref onClick={::this.handleShowFeedback} style={{ whiteSpace: 'nowrap' }}>Tell us more</a>
        </p>
      </nav>
    );
  }

  render() {
    const { feedback, placement } = this.props;

    const feedbackContainerStyle = {
      display: this.state.showFeedbackContainer ? 'block' : 'none',
    };

    const thank = (
      <VelocityTransitionGroup leave={{ animation: 'fadeOut' }} className="feedback-thank">
        {this.state.showFeedbackThank && <figure>Thanks for the feedback!</figure>}
      </VelocityTransitionGroup>
    );

    let widgetTitle;
    if (feedback.voted) {
      // Voted
      widgetTitle = 'Thank you!';
    } else {
      // Default
      widgetTitle = 'Is this page helpful?';
    }

    return (

      <div className="feedback alter">

        <MediaQuery minWidth={980}>
          {thank}

          <div className="box feedback-box" style={feedbackContainerStyle}>
            <a nohref className="box-close" onClick={::this.onClose}></a>
            <h5>{widgetTitle}</h5>
            {this.renderWidgetContent()}
          </div>

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
              useEmoji={false}
            />
          </Overlay>
        </MediaQuery>

        <MediaQuery maxWidth={979}>
          <a
            nohref
            onClick={::this.handleShowFeedback}
            className="button is-primary is-small"
          >
            <i className="icon icon-tip"></i>Feedback
          </a>

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
              useEmoji={false}
            />
          </Modal>
        </MediaQuery>

      </div>
    );
  }
}

Feedback3.defaultProps = {
  placement: 'top',
};

Feedback3.propTypes = {
  feedback: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  placement: PropTypes.string,
};

export default Feedback3;
