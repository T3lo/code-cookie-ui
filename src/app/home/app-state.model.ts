import { Problem } from "./problem.model";

export class AppState {
    total: number;
    current: number;
    loaded: boolean;
    addFlag: boolean;
    selectProblem: Problem;

    constructor() {
        this.loaded = false;
        this.addFlag = false;
        this.selectProblem = new Problem();
        this.total = 0;
        this.current = 0;
    }
}