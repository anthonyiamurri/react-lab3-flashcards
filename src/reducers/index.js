// This will be the values we start out with when the page loads.
const INITIAL_STATE = {
  isFront: true,
  currentCardIndex: 0,
  cards: [
    { front: "A front", back: "A back" },
    { front: "B front", back: "B back" },
    { front: "C front", back: "C back" },
    { front: "D front", back: "D back" },
    { front: "E front", back: "E back" },
    { front: "F front", back: "F back" }
  ]
}

// This one function is the reducer. The reducer is the heart of Redux. It tells
// redux what the initial state should be and how it should change the state
// based on any given action.
// We usually specify the initial state as the ES6 default value for the state
// parameter.
export default function(state = INITIAL_STATE, action) {
  // Just like plain React, the state is an immutable object. Rather than
  // changing part of the state, we must replace it.
    switch (action.type) {
        case "NEXT":
          return Object.assign({}, state, {
            currentCardIndex: state.currentCardIndex + 1
          });
        case "PREV":
          return Object.assign({}, state, {
            currentCardIndex: state.currentCardIndex - 1
          });
        case "FLIP":
          return Object.assign({}, state, {
            isFront: state.isFront === false
          });
        case "SHUFFLE":
          return Object.assign({}, state, {
            currentCardIndex: state.currentCardIndex + Math.floor((Math.random() * 6) + 1)
          });

        default:
            // If we don't recognize the action, don't change the state.
            return state;
    }
}
