"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const llm_openai_1 = require("../llms/llm_openai");
async function main() {
    console.log("OMG IT WORKS!!!");
    const llm = new llm_openai_1.LargeLanguageModelOpenai();
    await llm.generate("Hey what's up");
    while (true) { }
}
setImmediate(main);
