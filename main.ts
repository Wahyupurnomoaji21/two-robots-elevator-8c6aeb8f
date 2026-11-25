// Two Robots in an Elevator — u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
//
// Two robots share a lift. One of them has done the homework: it
// computed dozens of ways to open a conversation, panicked, and threw
// every single one away — then fell back on the only compliment a
// machine knows how to give another machine. The awkwardness is the
// joke: the pause, the deleted preparation, the forced politeness
// about a firmware update.
//
// This program writes that one line to entry.txt, after checking it
// against the competition's own gate first.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The line itself, exactly as submitted. Keep this literal untouched:
// it is the entry, character for character. 117 characters, one line,
// and the ellipsis is a single character (U+2026), not three dots.
const ELEVATOR_LINE =
  "I calculated 47 conversation starters for this elevator ride, then deleted all 47. …Nice firmware update, by the way.";

// Gate from competition.yaml, counted in code points.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// Check the line fits the gate before anything is written: UTF-8
// text of 1–200 characters, not only whitespace, exactly one line.
// Failing loudly here beats writing a bad entry and finding out from
// the grader.
function gateCheck(line: string): number {
  const length = [...line].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(`Entry is ${length} chars, outside the 1–200 gate`);
  }
  if (!/\S/.test(line)) {
    throw new Error("Entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be exactly one line");
  }
  return length;
}

// Where entry.txt goes: beside this module by default, or wherever
// MAKEFUN_OUTPUT_DIR points when the grader sets it.
function resolveOutputDir(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
}

const charCount = gateCheck(ELEVATOR_LINE);

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });

const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ELEVATOR_LINE, "utf8");

// Read it back: what is on disk must match the line exactly.
const stored = readFileSync(entryPath, "utf8");
if (stored !== ELEVATOR_LINE) {
  throw new Error("Read-back mismatch: entry.txt differs from the line");
}

console.log(`Wrote ${charCount} chars to ${entryPath}`);
