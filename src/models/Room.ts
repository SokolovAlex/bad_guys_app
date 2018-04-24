import { User } from './User'

export class Room {
    id: number;
    members: User[];
    created: Date;
    owner: string;

    constructor(public title: string, public description: string) { }
}