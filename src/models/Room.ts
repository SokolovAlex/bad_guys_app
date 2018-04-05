import { User } from './User'

export class Room {
    id: number;
    members: User[];
    created: Date;
    owner: string;

    get isNew(): boolean {
        return !this.id;
    }

    constructor(public title: string, public description: string) { }
}