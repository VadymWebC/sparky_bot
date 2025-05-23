import Openai from "openai"
import { Option } from "../types/option"
import { LargeLanguageModel } from "./iim_interface"

export class LargeLanguageModelOpenai implements LargeLanguageModel {
	#openai: Openai
	constructor() {
		this.#openai = new Openai({
			organization: null,
		})
	}
	async init(): Promise<void> {
		//
	}
	async free(): Promise<void> {
		//
	}
	async generate(promt: string): Promise<Option<string>> {
		const completion = await this.#openai.chat.completions.create({
			messages: [
				{ role: "system", content: "You are a helpful assistant." },
				{ role: "user", content: promt },
			],
			model: "gpt-3.5-turbo",
		})
		return {
			success: true,
			value: completion.choices[0]?.message.content!,
		}
	}
}
