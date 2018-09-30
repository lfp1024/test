"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const u = __importStar(require("./utils"));
async function f() {
    let j = 0;
    loop1: while (true) {
        for (let i = 0; i < 5; i++) {
            console.log("i = " + i);
            if (i == 3)
                break loop1;
        }
        console.log("j = " + j++);
        await u.sleep(1000);
    }
}
f();
