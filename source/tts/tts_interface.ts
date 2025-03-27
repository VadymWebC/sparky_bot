import { Module } from "../module/module_interface"

export interface TextToSpeech extends Module {
	generate(): Promise<void>
}
