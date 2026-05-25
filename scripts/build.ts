import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const csvPath = join(root, "data", "形近同音近音字.csv");
const outPath = join(root, "similar-chinese-characters.json");

const csv = readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
const rows = csv
  .trimEnd()
  .split(/\r?\n/)
  .map((line) => {
    const columns = line.split(",");
    if (columns.length !== 7) {
      throw new Error(`Expected 7 columns, got ${columns.length}: ${line.slice(0, 80)}`);
    }
    return columns;
  });

const [headers, ...bodyRows] = rows;
const output = { headers, rows: bodyRows };

writeFileSync(outPath, `${JSON.stringify(output)}\n`, "utf8");
console.log(`Wrote ${bodyRows.length} rows to ${outPath}`);
