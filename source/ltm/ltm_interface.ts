import { Module } from "../module/module_interface"

export interface LongTermMemory extends Module {
	generate(): Promise<void>
}
