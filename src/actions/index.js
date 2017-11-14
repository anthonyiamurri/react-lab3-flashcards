
// This function is an 'action creator' it returns the action object.
export function next() {
    // an action object should always have a 'type' property, and it may have
    // other properties as well. When this action is dispatched with Redux
    // it triggers the reducer which will update the state.
    return {
        type: "NEXT",
    };
}

export function prev() {
  return {
      type: "PREV",
  };
}

export function flip(card) {
    return {
      type: "FLIP",
      card
    };
}

export function shuffle(card) {
    return {
      type: "SHUFFLE",
      card
    };
}
