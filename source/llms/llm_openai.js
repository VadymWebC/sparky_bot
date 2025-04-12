"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeLanguageModelOpenai = void 0;
const openai_1 = __importDefault(require("openai"));
class LargeLanguageModelOpenai {
    #openai;
    constructor() {
        this.#openai = new openai_1.default({
            organization: null,
        });
    }
    async init() {
        //
    }
    async free() {
        //
    }
    async generate(promt) {
        const completion = await this.#openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: promt },
            ],
            model: "gpt-3.5-turbo",
        });
        return {
            success: true,
            value: completion.choices[0]?.message.content,
        };
    }
}
exports.LargeLanguageModelOpenai = LargeLanguageModelOpenai;
