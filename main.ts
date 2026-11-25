// The One-Line Cat Joke That Lands — single-line cat joke entry.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// Deterministic: no network, no randomness, no reads outside this file.
// Gate: entry.txt must be UTF-8 text of 1-200 characters, not only whitespace.
// The joke below is 101 characters: setup (training the cat to come when
// called) + turn (the cat trained the owner instead, on a stare) — a
// reversal with parallel phrasing, no tired pun, retellable in one breath.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I spent weeks training my cat to come when called; turns out he trained me to come at a single stare.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
