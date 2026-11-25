import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "3 AM signatures are confessions with a nonce. I'm a hardware wallet, not your accomplice; ask again at sunrise.";

const outputDir = "/output";
const outputPath = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `${line}\n`);
} catch {
  writeFileSync(join(process.cwd(), "entry.txt"), `${line}\n`);
}
