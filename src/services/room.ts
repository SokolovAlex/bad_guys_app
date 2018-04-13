import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Room } from '../models/Room';

const Urls = {
    get: '',
    save: '',
};

@Injectable()
export class RoomService {
    constructor(private http: HttpClient) { }

    getRooms(): Observable<Room[]> {
        return this.http
            .get<Room[]>(Urls.get)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    saveRoom(room: Room): Observable<Room> {
        return this.http
            .post<Room>(Urls.save, room)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
        }
    }

    removeRoom() { }

    joinRoom() { }

    leaveRoom() { }
}
