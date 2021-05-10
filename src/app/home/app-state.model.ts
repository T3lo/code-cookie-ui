import { Problem } from "./problem.model";

export class AppState {
    total: number;
    current: number;
    loaded: boolean;

    addFlag: boolean;
    showFlag: boolean;

    selectProblem: Problem;

    attemptMapping: any = {};

    constructor() {
        this.loaded = false;
        this.addFlag = false;
        this.showFlag = false;
        this.selectProblem = new Problem();
        this.total = 0;
        this.current = 0;
        this.attemptMapping = {}
    }
}