/// <reference path="typings/tsd.d.ts" />

module stdIn {
    let inputStdIn: string = "";
    let inputStdInArray: Array<string> = [];
    let inputCurrentLine: number = 0;
    let callback: ()=>void;

    process.stdin.resume();
    process.stdin.setEncoding('ascii');

    process.stdin.on('data', (data) => {
        inputStdIn += data;
    });

    process.stdin.on('end', () => {
        inputStdInArray = inputStdIn.split("\n");
        if (callback) {
            callback();
        }
    });

    export function ready(callbackValue: ()=>void) {
        callback = callbackValue;
    }

    export function readLine():string {
        return inputStdInArray[inputCurrentLine++];
    }

}