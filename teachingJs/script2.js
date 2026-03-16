import javascriptCourse from './script.js';

let sections_dataTypes = document.querySelector(".sections_dataTypes");
let main = document.querySelector(".main");
let main_aside = document.querySelector(".main_aside");

for (const element of javascriptCourse.sections[4].lessons) {
  console.log(element.title);

  let section = document.createElement("div");
  section.classList.add("sections_dataTypes");

  section.innerText = element.title;

  main_aside.append(section);
};