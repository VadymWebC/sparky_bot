import { Module } from "../module/module_interface"

export interface LongTermMemory extends Module {
	store(): Promise<void>
	query(): Promise<void>
}
