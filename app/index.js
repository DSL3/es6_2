// console.log('hello webpack');
// console.log('hello in the browser');

// let a = 'hello';

// console.log(a);

// {
//     // let a = 'googbye';
//     // console.log('a inside scope ', a);
//     let salary = 90000;    
// }

// console.log(salary);

// const array = [1, 2, 3]
// array.push(4);
// console.log(array);

// var a = 'hello';
// var b = 'world';
// var c = a + ' ' + b;
// console.log(c);

// var d = `hello ${b}`;
// console.log(d);

// var a = [7, 8, 9];
// var b = [6, ...a, 10];
// console.log(b);

// function print(a, b, c) {
//     console.log(a, b, c);
// }

// let z = [1, 2, 3];
// print(...z);


// function print(...z) {
//     console.log(z);
// }
// print(1, 2, 3, 4, 5, 6);


// let c = [100, 200];
// let [a, b] = c;
// console.log(a, b);

// function butter(...b) {
//     let a = [1, 2, 3, ...b];
//     return a;
//   }
  
//   butter(4, 5, 6);

// let c = [100, 200, 300, 400, 500];
// let [a, ...b] = c;
// console.log(a, b);

// let wizard = {magical: true, power: 10};
// // let magical = wizard.magical;
// // let power = wizard.power;
// let {magical, power} = wizard;
// console.log(magical, power);


// let magical = true;
// let power =  9;

// let ranger = { magical: false, power: 9 };

// //let { magical, power } = ranger;
// ( { magical, power } = ranger);
// console.log(magical, power);


// const lion = { size: 'large', sound: 'roar' }; 
// let { sound } = lion
// console.log(sound);


// function blastoff() {
//     console.log('3...2....1... blastoff!');
// }

// blastoff();

// setTimeout(function() {
//     console.log('3...2....1... blastoff!');
// }, 1000);

// setTimeout(() => {
//     console.log('3...2....1... blastoff!');
// }, 1000);

// const blastoff = () => {
//     console.log('3...2....1... blastoff!');
// };

// blastoff();

// this.a = 25;

// let print = function() {
//     this.a = 50;
//     console.log('this.a', this.a);
// }
// print();

// let arrowPrint = () => {
//     console.log('this.a is in a arrowPrint', this.a);
// }
// arrowPrint();

let points = [10, 20, 30];

// let addOne = function(element) {
//     return element + 1;
// };

// let addOne = (element) => {
//     return element + 1;
// };

// points  = points.map(addOne);


// points  = points.map(element => {
//     return element + 1;
// });

points  = points.map(element => element + 1);

console.log(points);