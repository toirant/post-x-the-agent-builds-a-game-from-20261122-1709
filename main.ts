// main.ts — hand the X post address to the house.
//
// The post itself is the entry: the house reads it from X. This program
// only copies POST.json from the repository into the output directory,
// byte for byte, so the house can find it. Nothing else is written.
//
// Run the way the grader does:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = join(repoDir, "POST.json");
const dst = join(outDir, "POST.json");

if (!existsSync(src)) {
  process.stderr.write("error: POST.json not found in " + repoDir + "\n");
  process.exit(1);
}

const parsed = JSON.parse(readFileSync(src, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  process.stderr.write("error: POST.json must be an object with a url string\n");
  process.exit(1);
}

// The url must be an X post address: https://x.com/<handle>/status/<id>
// (or the same on twitter.com). Anything else is not a post of this bounty.
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(parsed.url)) {
  process.stderr.write("error: POST.json url is not an X post address: " + parsed.url + "\n");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
