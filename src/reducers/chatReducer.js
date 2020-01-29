const initialState = {
  messages: [],
  currentMessage: '',
  userId: 'user-1',
  typing: false
};


function chatReducer(state = initialState, action) {
  if (action.type === 'SUBMIT_MESSAGE') {
    return Object.assign({}, state, {
      messages: state.messages.concat(action.payload)
    });
  }
  return state;
}

export default chatReducer;
