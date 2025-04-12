import Openai from "openai"
import { Option } from "../types/option"
import { LargeLanguageModel } from "./iim_interface"

export class LargeLangualeModelOpenai implements LargeLanguageModel {
	#openai: Openai
	constructor() {
		this.#openai = new Openai({
			organization: null,
		})
	}
	init(): Promise<void> {
		//
	}
	free(): Promise<void> {
		//
	}
	async generate(): Promise<Option<string>> {
		const completion = await this.#openai.chat.completions.create({
			messages: [{ role: "system", content: "You are a helpful assistant." }],
			model: "gpt-3.5-turbo",
		})
		console.log(completion.choices[0])
	}
}
