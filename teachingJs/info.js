import javascriptCourse from "./script.js";
let datatypess = javascriptCourse.sections[4].lessons;
let para = document.querySelector("p");
let sections_dataTypes = document.querySelectorAll(".sections_dataTypes");

para.innerText = datatypess[0].Text;

sections_dataTypes.forEach((el, index) => {
  el.addEventListener("click", function () {
    console.log(datatypess[index].Text);
    para.innerText = datatypess[index].Text;

    // remove active from all
    sections_dataTypes.forEach((item) => {
      item.classList.remove("active");
    });

    // add active to clicked element
    el.classList.add("active");
  });
});

// para.innerText = `• Overview of the Topic
// • Key Ideas and Explanations
// • Supporting Details and Examples
// • Final Thoughts and Observations

// > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit voluptate quis eveniet molestias illum doloribus esse. Illum nobis consequatur ab recusandae a rerum veniam quibusdam hic quidem accusamus. Cum eius voluptates harum at numquam est doloremque aperiam repellendus expedita sit ea sunt laborum accusantium consectetur id ipsa labore soluta aliquid debitis dignissimos doloribus in.

// > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid modi quos nesciunt recusandae veniam nostrum doloremque ad autem quae aspernatur soluta accusantium eligendi consequatur quam perspiciatis expedita animi consequuntur magni beatae inventore. Et alias facilis architecto nemo maxime dolorum ab omnis sapiente tempore ipsum inventore repellendus rem vitae sed nam beatae delectus modi similique adipisci eum repudiandae possimus obcaecati.

// > Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis quam repellendus provident rem quae nulla reprehenderit iure fuga magni placeat illo sed temporibus consequuntur alias exercitationem voluptates autem voluptate reprehenderit obcaecati. In facilis atque suscipit laudantium facere ea unde accusamus sint optio dolorem harum iste quis animi nisi autem libero eligendi modi culpa doloremque amet minus illo.

// > Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis quo enim dolore recusandae corrupti natus iste aut eligendi saepe et eum illum modi nesciunt ipsum tempore magnam amet dignissimos voluptates fuga culpa reiciendis quasi ex. Accusantium corporis odio impedit quidem quam inventore animi officiis magni molestias quo eius saepe ut est omnis laudantium distinctio suscipit excepturi enim ea soluta esse.`;
