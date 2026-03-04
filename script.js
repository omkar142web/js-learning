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

// let user2 = {
//   name: "OP",
//   age: 20,
// };

// let user = {
//   'name': "John",
//   df: 'dsfdsd',
//   id: 123,
//   age: 20,
//   role: 'dev',
//   'key hehe': 'value ',
//   active : true,
//   // size: {
//   //   width: 20,
//   //   height: 20,
//   // },
// };

// let para = document.getElementById('para');

// for (let key in user){
// console.log(key , user[key] );
// para.innerText = para.innerText + `\n${key} -- ${user[key]}`;
// }

// let checki = prompt('find something in user : ', 'name')
// // let checki = 'df'
// if (checki in user) console.log(`Yes! ${checki} is in user`);
// else console.log(`No! ${checki} is not in user`)

// let images = {
//   img1: {
//     src: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
//     title: "Google",
//     description:
//       "Google is a multinational technology company best known for its powerful search engine. It also provides services like Gmail, Google Maps, YouTube, Google Drive, and Android. It plays a major role in organizing the world's information.",
//     link: "https://www.google.com/",
//   },

//   img2: {
//     src: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
//     title: "Facebook",
//     description:
//       "Facebook is a social networking platform that allows users to connect with friends and family, share updates, photos, and videos. It also offers business tools, advertising services, and community groups worldwide.",
//     link: "https://www.facebook.com/",
//   },

//   img3: {
//     src: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
//     title: "GitHub",
//     description:
//       "GitHub is a web-based platform used by developers to store, manage, and collaborate on code projects using Git version control. It is widely used for open-source contributions and professional software development.",
//     link: "https://github.com/",
//   },

//   img4: {
//     src: "https://img.icons8.com/?size=100&id=19318&format=png&color=000000",
//     title: "YouTube",
//     description:
//       "YouTube is a video-sharing platform where users can upload, watch, and share videos. It includes content such as tutorials, entertainment, music, gaming, and educational videos, making it one of the most visited websites globally.",
//     link: "https://www.youtube.com/",
//   },

//   img5: {
//     src: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000",
//     title: "Twitter (X)",
//     description:
//       "Twitter, now known as X, is a microblogging platform where users share short posts called tweets. It is widely used for news updates, discussions, trending topics, and direct communication with public figures and brands.",
//     link: "https://twitter.com/",
//   },

//   img6: {
//     src: "https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000",
//     title: "Instagram",
//     description:
//       "Instagram is a photo and video sharing social media platform focused on visual content. It allows users to post images, reels, and stories while interacting through likes, comments, and direct messages.",
//     link: "https://www.instagram.com/",
//   },

//   img7: {
//     src: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
//     title: "LinkedIn",
//     description:
//       "LinkedIn is a professional networking platform where users create profiles showcasing their work experience, skills, and achievements. It is commonly used for job searching, recruitment, and business networking.",
//     link: "https://www.linkedin.com/",
//   },

//   img8: {
//     src: "https://img.icons8.com/?size=100&id=heQa_XKLT3nf&format=png&color=000000",
//     title: "Amazon",
//     description:
//       "Amazon is one of the largest e-commerce companies in the world. It offers online shopping, cloud computing services (AWS), digital streaming, and various consumer products across multiple countries.",
//     link: "https://www.amazon.com/",
//   },

//   img9: {
//     src: "https://img.icons8.com/?size=100&id=VZLXV08EcZsm&format=png&color=000000",
//     title: "Netflix",
//     description:
//       "Netflix is a subscription-based streaming service that provides movies, TV shows, documentaries, and original content. It operates globally and has transformed the way people consume entertainment.",
//     link: "https://www.netflix.com/",
//   },

//   img10: {
//     src: "https://img.icons8.com/?size=100&id=116726&format=png&color=000000",
//     title: "Spotify",
//     description:
//       "Spotify is a digital music streaming platform that allows users to listen to millions of songs and podcasts. It offers personalized playlists, recommendations, and offline listening options for subscribers.",
//     link: "https://www.spotify.com/",
//   },
// };

// let div = document.getElementById("div");

// for (let key in images) {
//   div.innerHTML += `<div class="inner_div ${images[key].title}">
//       <img class="img" src="${images[key].src}" alt="" />
//       <figcaption class="caption"><a href="${images[key].link}" target="_blank">${images[key].title}</a></figcaption>
//       <p class="dis">${images[key].description}</p>
//     </div>`;

//   // 2️⃣ Select ALL cards
//   let cards = document.querySelectorAll(".inner_div");

//   // 3️⃣ Add event to each
//   cards.forEach((card, index) => {
//     card.addEventListener("click", function () {
//       let key = Object.keys(images)[index];
//       window.open(images[key].link, "_blank");
//     });
//   });
// }

// let codes = {
//   "+49": "Germany",
//   "+1": "USA",
//   age:34,
//   "+41": "Switzerland",
//   name:'OP',
//   "+44": "UK",
// };

// console.log(codes)



// let user = {
//   name: "John",
//   age: 20,
//   role: 'dev',
//   // size: {
//   //   width: 20,
//   //   height: 20,
//   // },
// }
// let user2 = Object.assign({}, {name: "John"});

// user.car= 'BMW';
// console.log(user2)


// let parent = {
//   name: "Parent"
// };

// let child = {
//   name: "Child",
//   parent: parent
// };

// parent.child = child;