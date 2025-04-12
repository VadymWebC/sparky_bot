import * as fs from "fs"
import * as path from "path"

export function getAuth(): Record<string, string> {
	const PATH = path.join(process.cwd(), ".env")
	const file_content: string = fs.readFileSync(PATH, { encoding: "utf8" })

	const file_lines: string[] = file_content.split(/\r\n|\n/g)

	let result: Record<string, string>

	for (let line of file_lines) {
		const split_line = line.trim().split("=")
		if (split_line.length < 2) {
			console.error("Could not parse line", line)
		}
		result[split_line[0]] = split_line.join("")
	}
}
