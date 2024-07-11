//データ型について
let myAge = 28;　//数字
let myName = "お姉さん"; //文字列
let amIKind = true; //はい・いいえ
let mySecretCrush; //未定義
let myExBoyfriend = null; //ヌル
let aboutMe = {name: "お姉さん", age: 28, isKind: true}; //オブジェクト

console.log(typeof myAge); //"number"
console.log(typeof myName); //"string"

//練習
let myAge = 20;
let myName = "jo0jmjm";
let amIStudent = false;
let favoriteColor = "green";

console.log(typeof myAge);
console.log(typeof myName);
console.log(typeof amIStudent);
console.log(typeof favoriteColor);
let aboutMe = {
  name: "jo0jmjm",
  age: 20,
  hobbies: ["料理","音楽","旅行","温泉"],
  isKind: true
}

myAge++;
favoriteColor = "yellow";

console.log(typeof myAge);
console.log(typeof favoriteColor);

//関数の基本系
function test(ag1, ag2) {
  //やりたいこと
  return 0;
}

function greet(name) {
  return "hello " + name + "!!";
}

console.log(greet("jo0jmjm"));//hello jo0jmjm!!

//アロー関数
const greet = (name) => {
  return "hello " + name + "!!";
};

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 3));//８が出力

//条件分岐
function cgackAge(age) {
  if (age >= 20) {
    return "成人です";
  } else {
    return "未成年です";
  }
}

console.log(chakeAge(18));//未成年です
console.log(chakeAge(25));//成人です

function aboutMe(name, age) {
  return "初めまして、" + name + "です。" + age + "歳です。";
}

console.log(aboutMe("jo0jmjm", 20));

function aboutMe(name, age, hobby = "特になし") {
  return `初めまして、${name}です。${age}歳です。趣味は${hobby}です。`;
}

console.log(aboutMe("jo0jmjm", 20));

































