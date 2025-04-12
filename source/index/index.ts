import { LargeLanguageModel } from "../llms/iim_interface"
import { LargeLanguageModelOpenai } from "../llms/llm_openai"

async function main(): Promise<void> {
	console.log("OMG IT WORKS!!!")

	const llm: LargeLanguageModel = new LargeLanguageModelOpenai()
	await llm.generate("Hey what's up")

	while (true) {}
}

setImmediate(main)
