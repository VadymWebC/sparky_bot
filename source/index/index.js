"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_auth_1 = require("../auth/get_auth");
const llm_openai_1 = require("../llms/llm_openai");
async function main() {
    console.log("OMG IT WORKS!!!");
    const auth = (0, get_auth_1.getAuth)();
    console.log(auth);
    const llm = new llm_openai_1.LargeLanguageModelOpenai();
    await llm.generate("Hey what's up");
    while (true) { }
}
setImmediate(main);
