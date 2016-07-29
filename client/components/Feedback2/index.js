import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Modal, Overlay } from 'react-overlays';
import { VelocityTransitionGroup } from 'velocity-react';
import FeedbackForm1 from '../FeedbackForm1';

class Feedback2 extends Component {
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

  renderEmoji(type, hide) {
    const { feedback } = this.props;

    // Hide text with hide parameter
    if (hide === 'all' || hide === 'counts') {
      return (
        <a nohref className="level-item has-text-centered" onClick={() => this.handleAddVote(type)}>
          <img src={require(`../../images/${type}.png`)} alt="" />
        </a>
      );
    }

    let text;
    if (type === 'smile') text = feedback.voted && feedback.votedOn === 1 ? <strong>Yes</strong> : 'Yes';
    else if (type === 'frown') text = feedback.voted && feedback.votedOn === 2 ? <strong>No</strong> : 'No';
    return (
      <a nohref className="level-item has-text-centered" onClick={() => this.handleAddVote(type)}>
        <p className="heading"><img src={require(`../../images/${type}.png`)} alt="" /></p>
        <p className="title is-normal is-7">{text}</p>
      </a>
    );
  }

  renderWidgetContent() {
    const { feedback, query } = this.props;

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
        {this.renderEmoji('smile', query.hide)}

        {this.renderEmoji('frown', query.hide)}

        <p className="level-item">
          <a nohref onClick={::this.handleShowFeedback}>Tell us more</a>
        </p>
      </nav>
    );
  }

  render() {
    const { feedback, placement, query } = this.props;

    const feedbackContainerStyle = {
      display: this.state.showFeedbackContainer ? 'block' : 'none',
    };

    let widgetTitle;
    if (feedback.voted) {
      // Voted
      widgetTitle = 'Thank you!';
    } else {
      // Default
      widgetTitle = 'Is this page helpful?';
    }

    const thank = (
      <VelocityTransitionGroup leave={{ animation: 'fadeOut' }} className="feedback-thank">
        {this.state.showFeedbackThank && <figure>Thanks for the feedback!</figure>}
      </VelocityTransitionGroup>
    );

    return (

      <div className="feedback alter">

        <MediaQuery minWidth={980}>
          {thank}

          <div className="box feedback-box" style={feedbackContainerStyle}>
            <a nohref className="box-close" onClick={::this.onClose}></a>
            {query.hide !== 'all' && <h5>{widgetTitle}</h5>}
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
            />
          </Modal>
        </MediaQuery>

      </div>
    );
  }
}

Feedback2.defaultProps = {
  placement: 'top',
};

Feedback2.propTypes = {
  feedback: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  placement: PropTypes.string,
  query: PropTypes.object,
};

export default Feedback2;
