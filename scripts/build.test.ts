import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { headers, rows } = JSON.parse(
  readFileSync(join(root, "similar-chinese-characters.json"), "utf8"),
) as {
  headers: string[];
  rows: string[][];
};

describe("similar-chinese-characters.json", () => {
  it("has headers and rows", () => {
    expect(headers).toEqual(["國字", "注音", "部首", "型近字", "同音國字", "相似音國字", "用詞"]);
    expect(rows.length).toBeGreaterThan(0);
  });

  it("every row has 7 columns", () => {
    for (const row of rows) {
      expect(row).toHaveLength(7);
    }
  });
});
