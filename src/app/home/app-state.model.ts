import { Problem } from "./problem.model";

export class AppState {
    loaded: boolean;
    addFlag: boolean;
    selectProblem?: Problem;

    constructor() {
        this.loaded = false;
        this.addFlag = false;
        this.selectProblem = new Problem();
    }
}