/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列　どちらでも良い
// じゃけぇは「先に配列だと判るのが前者が好み」だそうだ
// 俺もC#的には前者かな、List<int>に似てるので
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any　なんでも入る…って、これ使ったらアカンじゃん…
let any1: any = false;

// void 返り値が無い場合
// 無くても勝手に推定してvoid型が入ってくれるんだがね
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object　下記 1, 2のどっちでもいいが、どちらも使うことが無い
// ただ、3は使うことがちょくちょくある
let obj1: object = {};
let obj2: {} = {};
let obj3: { id: number; name: string } = { id: 0, name: "A" };
