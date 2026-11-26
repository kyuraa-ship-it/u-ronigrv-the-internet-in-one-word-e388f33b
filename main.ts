// The Internet in One Word — entry program.
// Writes a single word to /output/entry.txt.
// Gate (RULES.txt): UTF-8 text, 1-30 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "blackhole";

function main(): void {
  // Self-check against the gate before writing: 1-30 chars, not only whitespace.
  if (WORD.length < 1 || WORD.length > 30 || !/\S/.test(WORD)) {
    throw new Error(`entry fails the gate: ${JSON.stringify(WORD)}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
  console.log(`wrote /output/entry.txt: ${WORD} (${WORD.length} chars)`);
}

main();
