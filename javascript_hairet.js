const greet = () =>{
  console.log("こんにちは！");
}// 定数greetを呼び出してください

greet();

//ダブルクォーテーションだと呼ばれないので注意！


// 関数の引数にnumber1とnumber2を追加してください
const add = (number1,number2) => {
  // number1とnumber2を足した値をコンソールに出力してください
  console.log(number1 + number2);
  
};

// 引数に5と7を渡して関数を呼び出してください
add(5,7);

//戻り値とは 関数が返す値
//return など

// const check = (number) => {
//   // numberが3の倍数かどうかを戻り値として返してください
//   return number % 3 === 0;
// };

// // if文の条件式で、checkを呼び出してください
// if (check(123)) {
//   console.log("3の倍数です");
// } else {
//   console.log("3の倍数ではありません");
// }

//定数や変数の使える範囲のことをスコープという

const getMax = (a,b,c) =>{
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  return max;
};

// 「最大値は○○です」と出力してください
const max = getMax(number1, number2, number3);
console.log(`最大値は${max}です`);
