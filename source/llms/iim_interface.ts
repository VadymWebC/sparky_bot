import { Module } from "../module/module_interface"

export interface LargeLanguageModel extends Module {
	generate(): Promise<void>
}
