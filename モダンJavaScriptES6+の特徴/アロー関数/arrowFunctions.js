//アロー関数はより簡単に関数を定義するための新し構文。
//特にthisのあるかいが従来の関数とは異なり、外側のスコープのthisを継承します。

//従来の関数
function add(a, b) {
  return a + b;
}

//アロー関数
const add = (a, b) =>> a + b;
