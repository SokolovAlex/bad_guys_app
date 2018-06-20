
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/reducers';
import { crud } from '../../common/enums';
import config from '../../server/config';

import * as actions from '../store/actions/rooms';

const WebSocket = window["WebSocket"] || window["MozWebSocket"];
// const webSocket = window.WebSocket || window["MozWebSocket"];

const getAction = (data: any) => {
	switch (data.type) {
		case crud.create:
			return new actions.SaveRoomSuccess(data.room);
		case crud.remove:
			return new actions.DeleteRoomSuccess(parseInt(data.id, 10));
		default:
			return new actions.ServerError("Unknown type");
	}
}

@Injectable()
export class RoomSocketService {
	id: Promise<string>;

	connection: WebSocket;

	constructor(private store: Store<AppState>) { }

	start(): WebSocket {
		this.connection = new WebSocket(`ws://127.0.0.1:${config.websocketPort}`);

		this.connection.onopen = () => console.log('opened socket');
		this.connection.onerror = (error) => console.log(`connection error ${error}`);

		this.connection.onmessage = (response) => {
			const data = JSON.parse(response.data);
			this.store.dispatch(getAction(data));
		};

		return this.connection;
	}

	joinRoom(): void {
		this.connection.send("join");
	}

	leaveRoom(): void {
		this.connection.send("leave");
	}
}