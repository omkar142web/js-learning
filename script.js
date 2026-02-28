// console.log('first clg');

// const { cloneElement } = require("react");

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

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled."); }
// );

// let age =  18;

// let welcome = (age < 18)
//   ? () => alert("Hello!")
//   : () => {alert("Greetings!")};

// welcome();

// console.log(welcome())

// // console.log('first')

// let a = {
//   name: "Omkar",
//   age: 20,
//   "shoe size": 10,
//   "fav car": "BMW M3",
//   "age2#": 21,
// };

// console.log(a["fav car"]);
// console.log(a["age2#"]);
// delete a["shoe size"];
// delete a["age2#"];

// let value = 1234;
// let key = "password 1";
// a[key]  = value;
// // console.log(a.password);

// console.log(a);

// console.log(`${a}`);

// let fruit =  "apple";
// // let qu = 5;
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// let ankey= 'orange count';
// bag[ankey] = 10;

// let ankey1= 'orange';
// bag[ankey1] = "good";

// let compute = 'to';
// // bag[compute + ' compute'] = 5
// bag[`${compute} compute`] = 5

// console.log(bag['to compute'])

// // bag
// console.log( bag.apple ); // 5 if fruit="apple"
// console.log(bag)

// function makeUser(name_, age_ , gender_= null ) {
//   // console.log(gender_)
//   return {
//     name: name_,
//     age: age_,
//     gender: gender_,
//     // ...other properties
//   };

// }
// let user = makeUser("John", 30);

// let user = {
//   '7' : 1,
//   age : 5,
//   // sdfd:undefined,
//   'fav car' : 'BMW M3'
// }

// console.log(user);

// for (let key in user) {

//   console.log(key)

//   console.log(user[key])

// }

// let codes = {
//   '+49': "Germany",
//   '+41': "Switzerland",
//   name : 'dfddf',
//  '+44': "Great Britain",
//   // ..,
//   '+1': "USA"
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// function add(id, age, name = null) {
//   return {
//     id:id,
//     age,
//     name,
//   }
// }

// let user =add(45,20, 'omkar')

// console.log(user)

// let user = {
//   name: "John",
//   age: 20,
//   // role: 'dev',
//   size: {
//     width: 20,
//     height: 20,
//   },
// };

// let clone = Object.assign({}, user);



// user.size.width = 999;
// user.age =100;


// console.log(user);
// console.log(clone);


// let user ={
//   name: "John",
//   age: 20,
// }
// user.me=user;

// let clone = structuredClone(user);


// console.log(user == clone.me);
// console.log(user.me == clone.me);


