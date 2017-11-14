import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions';
import { shuffle } from '../actions';
import Card from './Card';

class ShuffleButton extends Component {
  render () {
    return (
      <button onClick={this.props.shuffle} className="ShuffleButton">
        Shuffle
      </button>
    );
  }
}

const mapActionsToProps = {
  shuffle: shuffle
};

export default connect(null, mapActionsToProps)(ShuffleButton);
