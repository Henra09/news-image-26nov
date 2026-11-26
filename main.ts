// news-image entry, 26 November 2026.
//
// The finished infographic ships as entry.png beside this file; the program's
// one job is to place it where the grader reads it. It runs on Node 22 with
// the standard library alone, twice per grading, and must write identical
// bytes both times.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const OUTPUT_NAME = 'entry.png';

function outputDirectory(): string {
  // The grader mounts a writable /output; local runs override it.
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

function main(): void {
  const outDir = resolve(outputDirectory());
  mkdirSync(outDir, { recursive: true });

  const source = new URL(`./${OUTPUT_NAME}`, import.meta.url);
  const target = join(outDir, OUTPUT_NAME);
  copyFileSync(source, target);

  console.log(`Wrote ${target}`);
}

main();
