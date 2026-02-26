// console.log('first clg');

// [1, 2].forEach(alert);

// let c ,b=2,a;
// b =a = c;

// console.log(c,a,b)

// console.log((a = b + 1))

// let counter = 2;
// let a = ++counter;

// console.log(a)
// console.log(counter)

// console.log( Number(" "))

// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));

// alert(a + b); // 12

// let num = +prompt('enter a number', 0);
// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// console.log((Number('sdfsdf')))

// console.log(1+'1'+1)  // "11" +1 > "111"

// let x = (1 || 2) ?? 3;

// console.log(x);

// outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     if (j == 2) {
//       break outer;
//     //   break ;
//     };

//     // let input = console.log(`Value at coords (${i},${j})`, '');
//     // what if we want to exit from here to Done (below)?
//     console.log('j' ,j);
//   }

//   console.log(i);
// }
// console.log('done!')

// let a = 2 + 26;

// switch (a) {
//   case 3:
//     console.log("Too small");
//     break;
//   case 4:
//     console.log("Exactly!");
//     break;
//   default:
//     console.log("I don't know such values");
//     break;
//   case 5:
//     console.log("Too big");
//     break;
// }

// let browser = "Edge";

// if (browser == "Edge") {
//   console.log("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');
// let a = 0;

// switch (a) {
//     case 0:
//     console.log( 0 );
//     break;

//     case 1:
//     console.log( 1 );
//     break;

//     case 2:
//     case 3:
//     console.log( '2,3' );
//     break;

//     default:
//     console.log( 'default' );
//     break;
// }

// let a = "there you go!";
// console.log(a);

// function showMessage(from, text) {
//   from = "*" + from + "*"; // make "from" look nicer
//   console.log(from + ": " + text);
// }

// let f = "Ann";
// showMessage(); // *Ann*: Hello

// console.log(f); // Ann

// let h = 0;
//  if (h ?? '100' ) console.log('its working!!');

// console.log('first')

// function showMovie() {
//     let sum = 20 + 30;
//     return sum;
// }

// let r= showMovie(); console.log(r);

// // alert('this is it')
// let op = "Omkar C. P."
// let cond =+prompt('want to see the alert (t/f)', op)

// if (cond) {
//     alert('this is it')
// } else {
//     confirm('want to exit')
// }

// for (let i = 0; i++ < 3; ) { // shows 0, then 1, then 2
//   console.log(i);
// }

// console.log(name2(51))

// function name2(e) {
//     return 50-e

// }

// let name = function(e) {
//     return 50-e

// }
// console.log(name(51))

// let num = 543543;
// let letter = `${num}`;
// console.log(typeof letter);
// console.log(letter);


// function round(val1 , val2=2, val3 = 2) {
//     let result1 = (val1 % val2);
//     result =Math.pow(result1,val3);
//     return result;

    
// }

// let a = round(10,7)
// console.log(a)




function sayhello() {
    return "hello";    
}

console.log(`${sayhello}`);

console.log(sayhello)

sayhello();

