// The Human Train — explains a queue to a 10-year-old in two lines.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry =
  "A queue is a human train that builds itself one person at a time, each carriage waiting for the one in front to move.\n" +
  "The train picture maps how everyone waits their turn and moves together, but it leaves out that nobody is driving it and anyone can step out of line whenever they like.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
chmodSync(outPath, 0o644);
