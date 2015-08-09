/// <reference path="stdIn.ts" />

stdIn.ready(main);

interface ISolver {
    aValue:number;
    bValue:number;
    solve:()=>number;
}

class Solver implements ISolver {

    aValue:number;

    bValue:number;

    constructor(aValue:number, bValue:number) {
        this.aValue = aValue;
        this.bValue = bValue;
    }

    solve():number {
        return this.aValue + this.bValue;
    }

}


function main() {

    var a = parseInt(stdIn.readLine());
    var b = parseInt(stdIn.readLine());

    var solver = new Solver(a, b);

    console.log(solver.solve());
}
