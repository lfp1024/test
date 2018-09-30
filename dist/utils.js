"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => res(), millis);
    });
}
exports.sleep = sleep;
