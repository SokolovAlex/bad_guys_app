
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor(private uniqueDeviceID: UniqueDeviceID) { }

    getId(): Promise<any> {
        return this.uniqueDeviceID.get()
            .then((uuid: any) => uuid)
            .catch((error: any) => { console.log(error); return '- unknown ID -';});
    }
}