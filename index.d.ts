/** CSV columns: 國字, 注音, 部首, 型近字, 同音國字, 相似音國字, 用詞 */
export type SimilarChineseCharactersHeaders = [
  character: "國字",
  pronunciation: "注音",
  radical: "部首",
  lookalikeCharacters: "型近字",
  homophones: "同音國字",
  similarSoundingCharacters: "相似音國字",
  usage: "用詞",
];

export type SimilarChineseCharactersRow = [
  character: string,
  pronunciation: string,
  radical: string,
  lookalikeCharacters: string,
  homophones: string,
  similarSoundingCharacters: string,
  usage: string,
];

export type SimilarChineseCharacters = {
  headers: SimilarChineseCharactersHeader;
  rows: SimilarChineseCharactersRow[];
};

declare const similarChineseCharacters: SimilarChineseCharacters;

export default similarChineseCharacters;
