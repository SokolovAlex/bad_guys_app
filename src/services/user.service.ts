
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../server/config';

const root = `http://localhost:${config.port}/api`;
const Urls = {
    google: `${root}/auth/google`,
    vk: `${root}/auth/vkontakte`
};

@Injectable()
export class UserService {
    id: Promise<string>;

    constructor(private uniqueDeviceID: UniqueDeviceID, private http: HttpClient) { }

    getId(): Promise<any> {
        return this.id || this.uniqueDeviceID.get()
            .then((uuid: any) => uuid)
            .catch((error: any) => `ID - ${ Math.ceil(Math.random() * 1000000) }`);
    }

    googleAuth(): Promise<any> {
        return this.http.get(Urls.google)
        .toPromise()
        .then((data) => {
            debugger;
        })
        .catch((err) => {
            debugger;
        });
    }

    vkAuth(): Promise<any> {
        return this.http.get(Urls.vk)
        .toPromise()
        .then((data) => {
            debugger;
        })
        .catch((err) => {
            debugger;
        });
    }
}