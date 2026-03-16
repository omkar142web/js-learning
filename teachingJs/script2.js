import javascriptCourse from './script.js';

let sections_dataTypes = document.querySelector(".sections_dataTypes");
let main = document.querySelector(".main");
let main_aside = document.querySelector(".main_aside");

let datatypess = javascriptCourse.sections[4].lessons;

for (const element of datatypess) {
  console.log(element.title);

  let section = document.createElement("div");
  section.classList.add("sections_dataTypes");

  section.innerText = element.title;

  main_aside.append(section);
};