import { ActionTypes } from '../actions/socket';

const initialState = {
    loaded: false,
    message: 'Just created',
    connected: false,
};

export default function reducer(state = initialState, action: any = {}) {
    switch (action.type) {
      case ActionTypes.SOCKETS_CONNECTING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Connecting...',
          connected: false
        });
      case ActionTypes.SOCKETS_DISCONNECTING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Disconnecting...',
          connected: true
        });
      case ActionTypes.SOCKETS_MESSAGE_SENDING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Send message',
          connected: true
        });
      case ActionTypes.SOCKETS_MESSAGE_RECEIVING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Message receive',
          connected: true
        });
      default:
        return state;
    }
  }