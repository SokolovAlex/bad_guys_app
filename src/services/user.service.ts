
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../server/config';
import { User } from '../models/User';

const root = `http://localhost:${config.port}/api`;
const Urls = {
    google: `${root}/auth/google`,
    vk: `${root}/auth/vkontakte`
};

@Injectable()
export class UserService {
    id: Promise<string>;

    constructor(private uniqueDeviceID: UniqueDeviceID, private http: HttpClient) { }

    getId(): Promise<number> {
        return this.id || this.uniqueDeviceID.get()
            .then((uuid: any) => uuid)
            .catch((error: any) => Math.ceil(Math.random() * 1000000));
    }

    async getUser(): Promise<User> {
         const id = await this.getId();
         return { id, name: `ID-${id}` } as User;
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