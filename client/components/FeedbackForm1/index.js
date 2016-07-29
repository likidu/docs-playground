// FeedbackFrom from PopOver
import React, { PropTypes } from 'react';
import PopOver from '../PopOver';

const FeedbackForm1 = (props) => {
  const { feedback, onSubmit, onClose, addVote, placement, useEmoji } = props;

  let voteStatus = (
    <section>
      <h5>Is this page helpful?</h5>
      <div className="level">
      {useEmoji && (
        <div className="level-left">
          <a nohref className="level-item has-text-centered" onClick={() => addVote('smile')}>
            <p className="heading" style={{ marginTop: 0 }}><img src={require('../../images/smile.png')} alt="" /></p>
            <p className="title is-normal is-7">Yes</p>
          </a>
          <a nohref className="level-item has-text-centered" onClick={() => addVote('frown')}>
            <p className="heading" style={{ marginTop: 0 }}><img src={require('../../images/frown.png')} alt="" /></p>
            <p className="title is-normal is-7">No</p>
          </a>
        </div>
      )}
      {!useEmoji && (
        <div className="level-left">
          <span className="level-item">
            <a nohref className="button is-primary is-small-wide" onClick={() => addVote('smile')}>Yes</a>
          </span>
          <span className="level-item">
            <a nohref className="button is-primary is-small-wide" onClick={() => addVote('frown')}>No</a>
          </span>
        </div>
      )}
      </div>
    </section>
  );
  if (feedback.voted) {
    if (feedback.votedOn === 1) {
      voteStatus = (
        <section>
          <div className="level-left">
          {useEmoji && (
            <span className="level-item" style={{ lineHeight: '24px' }}>
              <p><img src={require('../../images/smile.png')} alt="" style={{ marginBottom: '-5px', opacity: 0.7 }} /> You voted yes.</p>
              <p style={{ marginBottom: 0 }}>Thank you! Please help make this documentation even better…</p>
            </span>
          )}
          {!useEmoji && (
            <span className="level-item">
              <p style={{ lineHeight: '32px' }}>You voted <a nohref className="button is-primary is-small-wide is-disabled">Yes</a></p>
              <p style={{ marginBottom: 0 }}>Thank you! Please help make this documentation even better…</p>
            </span>
          )}
          </div>
        </section>
      );
    } else if (feedback.votedOn === 2) {
      voteStatus = (
        <section>
          <div className="level-left">
          {useEmoji && (
            <span className="level-item" style={{ lineHeight: '24px' }}>
              <p><img src={require('../../images/frown.png')} alt="" style={{ marginBottom: '-5px', opacity: 0.7 }} /> You voted no.</p>
              <p style={{ marginBottom: 0 }}>Thank you! Your feedback makes this documentation better.</p>
            </span>
          )}
          {!useEmoji && (
            <span className="level-item">
              <p style={{ lineHeight: '32px' }}>You voted <a nohref className="button is-primary is-small-wide is-disabled">No</a></p>
              <p style={{ marginBottom: 0 }}>Thank you! Your feedback makes this documentation better.</p>
            </span>
          )}
          </div>
        </section>
      );
    }
  }

  return (
    <PopOver
      onClose={onClose}
      placement={placement}
    >
      {voteStatus}

      <section>
        <h5>How can we improve?</h5>
        <p className="control">
          <label htmlFor="option-1" className="checkbox">
            <input id="option-1" type="checkbox" />Fix inaccurate content
          </label>
        </p>
        <p className="control">
          <label htmlFor="option-2" className="checkbox">
            <input id="option-2" type="checkbox" />Give me more information
          </label>
        </p>
        <p className="control">
          <label htmlFor="option-3" className="checkbox">
            <input id="option-3" type="checkbox" />Fix typos or broken links
          </label>
        </p>
        <p className="control">
          <label htmlFor="option-4" className="checkbox">
            <input id="option-4" type="checkbox" />Add or fix code samples
          </label>
        </p>
        <p className="control">
          <label htmlFor="option-5" className="checkbox">
            <input id="option-5" type="checkbox" />Improve illustrations
          </label>
        </p>
      </section>
      <section>
        <h5>More suggestions:</h5>
        <p className="control is-horizontal">
          <textarea
            name="feedback-content"
            className="control textarea"
            placeholder="Please share your ideas. We welcome feedback in any language."
          />
        </p>
      </section>
      <section>
        <p className="control is-horizontal on-right">
          <a nohref className="button is-primary is-small" onClick={onSubmit}>Submit</a>
        </p>
      </section>

    </PopOver>
  );
};

FeedbackForm1.defaultProps = {
  useEmoji: true,
};

FeedbackForm1.propTypes = {
  feedback: PropTypes.object.isRequired,
  placement: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  addVote: PropTypes.func.isRequired,
  useEmoji: PropTypes.bool,
};

export default FeedbackForm1;
