import { Action } from '@ngrx/store';

export const ActionTypes = {
    SOCKETS_CONNECTING: 'SOCKETS_CONNECTING',
    SOCKETS_DISCONNECTING: 'SOCKETS_DISCONNECTING',
    SOCKETS_MESSAGE_SENDING: 'SOCKETS_MESSAGE_SENDING',
    SOCKETS_MESSAGE_RECEIVING: 'SOCKETS_MESSAGE_RECEIVING',
};

export class Connecting implements Action {
    type = ActionTypes.SOCKETS_CONNECTING
}

export class Disconnection implements Action {
    type = ActionTypes.SOCKETS_DISCONNECTING
}

export class Sending implements Action {
    type = ActionTypes.SOCKETS_MESSAGE_SENDING
    constructor(public payload: any) { }
}

export class Receiving implements Action {
    type = ActionTypes.SOCKETS_MESSAGE_RECEIVING
    constructor(public payload: any) { }
}

export type Actions = Connecting
    | Receiving
    | Disconnection
    | Sending