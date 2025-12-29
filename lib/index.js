"use strict";

const chalk = require("chalk");

console.log(chalk.cyan(`
     _    ____ ___ _____ _   _    _         
    / \\  / ___|_ _|_   _| | | |  / \\        
   / _ \\ \\___ \\| |  | | | |_| | / _ \\       
  / ___ \\ ___) | |  | | |  _  |/ ___ \\      
 /_/   \\_\\____/___| |_| |_| |_/_/   \\_\\     
`));

console.log(chalk.green(" ┌───────────────────────────────────────┐ "));
console.log(chalk.yellow(" │  👨‍💻 Developer : Mr Asitha            │ "));
console.log(chalk.yellow(" │  🌐 Website   : https://asitha.top    │ "));
console.log(chalk.yellow(" │  🚀 Version   : ASITHA-MD V1.0        │ "));
console.log(chalk.green(" └───────────────────────────────────────┘ \n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("mod-baileys/lib/Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("mod-baileys/WAProto"), exports);
__exportStar(require("mod-baileys/lib/Utils"), exports);
__exportStar(require("mod-baileys/lib/Types"), exports);
__exportStar(require("mod-baileys/lib/Store"), exports);
__exportStar(require("mod-baileys/lib/Defaults"), exports);
__exportStar(require("mod-baileys/lib/WABinary"), exports);
__exportStar(require("mod-baileys/lib/WAM"), exports);
__exportStar(require("mod-baileys/lib/WAUSync"), exports);

exports.default = Socket_1.default;
