import { User } from './User'

export class Room {
    id: number;
    created: Date;
    owner: string;

    constructor(public title: string, public description: string, public members: User[]) { }
}