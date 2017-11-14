import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlipButton from './FlipButton';

class Card extends Component {

  render() {
    return (
      <div className="Card">
        <div className="CardText">
        {this.props.text}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const card = state.cards[state.currentCardIndex];
  let cardText;
  let front;
  if (state.isFront) {
    cardText = card.front;
    front = "front";
  } else {
    cardText = card.back;
    front = "back";
  }

  return {
    text: cardText,
    front: front
  };
}


export default connect(mapStateToProps)(Card);
