export class Attempt {
    id?: number;
    pid: number;
    moment: Date;
    constructor() {
        this.pid = -1;
        this.moment = new Date();
    }
}