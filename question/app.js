// Q1 変数
let nickname = 'しょう';
let age = 25;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go',];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4  配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6 関数-1
function sayHello() {
  console.log('Hello');
}
sayHello();

// Q6 関数-2
let sayWorld = function () {
  console.log('World');
}
sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log('Hello');
}
console.log(user.birthday);
user.sayHello();

// Q8 引数-1
let calc = {};
calc.add = function (x, y) {
  console.log(x + y);
}
calc.add(5, 2);

// Q8 引数-2
calc.subtract = function (x, y) {
  console.log(x - y);
}
calc.subtract(20, 10);

// Q8 引数-3
calc.multiply = function (x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

// Q8 引数-4
calc.divide = function (x, y) {
  console.log(x / y);
}
calc.divide(20, 4);

// Q9 返り値
function remainder (x, y) {
  return (x % y);
}
console.log('5 を 3 で割った余りは ' + remainder (5, 3) + ' です。');
