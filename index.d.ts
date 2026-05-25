/** CSV columns: 國字, 注音, 部首, 型近字, 同音國字, 相似音國字, 用詞 */
export type SimilarChineseCharacterHeader = [
  "國字",
  "注音",
  "部首",
  "型近字",
  "同音國字",
  "相似音國字",
  "用詞",
];

export type SimilarChineseCharacterRow = [string, string, string, string, string, string, string];

export type SimilarChineseCharacters = {
  headers: SimilarChineseCharacterHeader;
  rows: SimilarChineseCharacterRow[];
};

declare const similarChineseCharacters: SimilarChineseCharacters;

export default similarChineseCharacters;
