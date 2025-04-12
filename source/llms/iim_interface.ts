import { Module } from "../module/module_interface"
import { Option } from "../types/option"

export interface LargeLanguageModel extends Module {
	generate(): Promise<Option<string>>
}
