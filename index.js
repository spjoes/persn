#!/usr/bin/env node

const bold = (str) => `\x1b[1m${str}\x1b[0m`;
const green = (str) => `\x1b[32m${str}\x1b[0m`;
const cyan = (str) => `\x1b[36m${str}\x1b[0m`;
const dim = (str) => `\x1b[2m${str}\x1b[0m`;
const white = (str) => `\x1b[37m${str}\x1b[0m`;
const blue = (str) => `\x1b[34m${str}\x1b[0m`;

const link = (text, url) => `\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\`;

console.log();
console.log(bold(green("  ═══════════════════════════════════════")));
console.log();
console.log("     " + bold(white("👋 Hi, I'm")) + " " + bold(green("Joey")) + bold(white(" (or ")) + bold(green("IAmThePerson")) + bold(white("/")) + bold(green("persn")) + bold(white(" online)")));
console.log();
console.log("     " + dim(white("Software Engineering student at SJSU building apps with JavaScript, Swift, and Go")));
console.log("     " + dim(white("(I use " + blue("NixOS") + dim(white(" btw)")))));
console.log();
console.log("     🌐  " + link(cyan("github.com/spjoes"), "https://github.com/spjoes"));
console.log("     🌐  " + link(cyan("persn.dev"), "https://persn.dev"));
console.log();
console.log(bold(green("  ═══════════════════════════════════════")));
console.log();
