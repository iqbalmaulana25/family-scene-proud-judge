// Make the AI Judge Feel Proud: A Family Scene
// One short family scene, one or two lines and no more than 280 characters:
// warm, funny and heartfelt. A small domestic moment — a robot learning
// grace from Dad — that ends on the quietest character feeling seen.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Dad taught the robot to say grace; now it thanks the toaster every night, and honestly, the toaster has never looked prouder.";

const limit = 280;
if ([...line].length > limit) {
  throw new Error(`scene too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
