//スプレット演算子(`...`)は、配列やオブジェクトを展開するために使用。
//関数の引数を配列として渡したり、配列やオブジェクトを結合したりするのに便利。

//配列のスプレット演算子
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);// [1, 2, 3, 4]

//オブジェクトのスプレット演算子
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combined = { ...obj1, ...obj2 };
console.log(combined);// {a: 1, b; 2, c: 3, d: 4}

