# @leonsilicon/kris2808\_\_similar-chinese-characters

形近同音近音字 dataset — similar-looking, homophone, and near-homophone Chinese characters parsed from [形近同音近音字.csv](./data/形近同音近音字.csv).

## Install

```bash
npm install @leonsilicon/kris2808__similar-chinese-characters
```

## Usage

```js
import similarChineseCharacters from "@leonsilicon/kris2808__similar-chinese-characters";

const { headers, rows } = similarChineseCharacters;
// headers: ["國字", "注音", "部首", "型近字", "同音國字", "相似音國字", "用詞"]

const [
  character,
  pronunciation,
  radical,
  lookalikeCharacters,
  homophones,
  similarSoundingCharacters,
  usage,
] = rows[0];
```

Import the raw JSON directly:

```js
import similarChineseCharacters from "@leonsilicon/kris2808__similar-chinese-characters/similar-chinese-characters.json" with { type: "json" };
```

## Data format

`similar-chinese-characters.json` has two properties:

- `headers` — column names from the CSV header row (Chinese labels; see English names below)
- `rows` — array of rows; each row is an array of 7 string columns in the same order

| Chinese (header) | English (typed name) |
| --- | --- |
| 國字 | `character` |
| 注音 | `pronunciation` |
| 部首 | `radical` |
| 型近字 | `lookalikeCharacters` |
| 同音國字 | `homophones` |
| 相似音國字 | `similarSoundingCharacters` |
| 用詞 | `usage` |

Semicolon-separated lists within a cell are kept as a single string (e.g. `"約;釣;豹;灼;皎"`).

## Development

```bash
bun install
bun run build   # regenerate similar-chinese-characters.json from data/形近同音近音字.csv
bun run check
```

## License

MIT
