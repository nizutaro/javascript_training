// 比較演算子
const password = "hoge";

//等しい場合
if(password === "hoge"){
  console.log("等しい");
}

//等しくない場合
if(password !== "gyohe"){
  console.log("等しくない");
}

//switch文 VBAのselect case

// switch(条件の値){
// case 値1:
// 「条件の値」が「値1」と等しい時の処理
// break;

//default:・・・どれも正しくない場合
//処理
//break
//}


// while 文を用いた例

let number = 1; //変数の定義
while(number <= 100) { //条件式
  console.log(number);
  number += 1; //変数の更新
}

//for 文 変数の定義 条件式 変数の更新
//jsは += 1 を ++と省略できる --と省略できる
for (let number = 1; number <= 100; number +=1){
  console.log(number);
}

const animals = ["dog", "cat", "sheep"];

// 配列animalsの3つ目の要素を「rabbit」に更新
animals[2] = "rabbit";

// 配列animalsの3つ目の要素をコンソールに表示
console.log(animals[2]);

const animals = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3;i++){
  console.log(animals[i]);
}

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// for文を完成させてください
for (let i = 0;i<characters.length;i++) {
  console.log("--------------------");
  
  // 定数characterを定義してください
  const character = characters[i];
  
  // 「名前は〇〇です」を出力してください
  console.log("名前は"+character.name+"です");
  
  // 「〇〇歳です」を出力してください
  console.log(character.age + "歳です");
}