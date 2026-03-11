const form = document.querySelector("#form");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const style = document.querySelector("#style");
const result = document.querySelector("#result");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = `${first.value} ${last.value}`.trim();

result.innerText = formatName(name,style.value);

});

function formatName(name,type){

if(!name) return "";

if(type === "upper"){
return name.toUpperCase();
}

if(type === "lower"){
return name.toLowerCase();
}

if(type === "capitalize"){

return name
.split(" ")
.map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
.join(" ");

}

}