const javascriptCourse = {
  title: "JavaScript Complete Guide",
  slug: "javascript-complete-guide",
  description:
    "A structured learning path covering JavaScript from fundamentals to advanced browser APIs.",
  level: "beginner-to-advanced",
  progress: 0,

  sections: [
    {
      id: "intro",
      title: "An Introduction",
      description: "Basic introduction to JavaScript and development tools.",

      lessons: [
        {
          title: "An Introduction to JavaScript",
          slug: "introduction-to-javascript",
          difficulty: "beginner",
          duration: "10 min",
          description:
            "Overview of JavaScript, its history, and where it runs.",
          examples: [],
          quiz: [],
          completed: false,
        },
        {
          title: "Manuals and specifications",
          slug: "manuals-and-specifications",
          difficulty: "beginner",
          examples: [],
          quiz: [],
          completed: false,
        },
        {
          title: "Code editors",
          slug: "code-editors",
          difficulty: "beginner",
          examples: [],
          quiz: [],
          completed: false,
        },
        {
          title: "Developer console",
          slug: "developer-console",
          difficulty: "beginner",
          examples: [],
          quiz: [],
          completed: false,
        },
      ],
    },

    {
      id: "fundamentals",
      title: "JavaScript Fundamentals",
      description:
        "Core language concepts required for every JavaScript developer.",

      lessons: [
        { title: "Hello, world!", slug: "hello-world", completed: false },
        { title: "Code structure", slug: "code-structure", completed: false },
        {
          title: 'The modern mode, "use strict"',
          slug: "use-strict",
          completed: false,
        },
        { title: "Variables", slug: "variables", completed: false },
        { title: "Data types", slug: "data-types", completed: false },
        {
          title: "Interaction: alert, prompt, confirm",
          slug: "interaction",
          completed: false,
        },
        {
          title: "Type Conversions",
          slug: "type-conversion",
          completed: false,
        },
        {
          title: "Basic operators, maths",
          slug: "operators",
          completed: false,
        },
        { title: "Comparisons", slug: "comparisons", completed: false },
        {
          title: "Conditional branching: if, '?'",
          slug: "if-else",
          completed: false,
        },
        {
          title: "Logical operators",
          slug: "logical-operators",
          completed: false,
        },
        {
          title: "Nullish coalescing operator '??'",
          slug: "nullish-coalescing",
          completed: false,
        },
        { title: "Loops: while and for", slug: "loops", completed: false },
        { title: "The switch statement", slug: "switch", completed: false },
        { title: "Functions", slug: "functions", completed: false },
        {
          title: "Function expressions",
          slug: "function-expressions",
          completed: false,
        },
        { title: "Arrow functions", slug: "arrow-functions", completed: false },
      ],
    },

    {
      id: "code-quality",
      title: "JavaScript Specials",
      description: "Best practices and debugging techniques.",

      lessons: [
        { title: "Code quality", slug: "code-quality" },
        { title: "Debugging in the browser", slug: "debugging" },
        { title: "Coding Style", slug: "coding-style" },
        { title: "Comments", slug: "comments" },
        { title: "Ninja code", slug: "ninja-code" },
        { title: "Automated testing with Mocha", slug: "mocha-testing" },
        { title: "Polyfills and transpilers", slug: "polyfills-transpilers" },
      ],
    },

    {
      id: "objects-basics",
      title: "Objects: The Basics",
      lessons: [
        { title: "Objects", slug: "objects" },
        { title: "Object references and copying", slug: "object-copy" },
        { title: "Garbage collection", slug: "garbage-collection" },
        { title: 'Object methods, "this"', slug: "object-this" },
        { title: 'Constructor, operator "new"', slug: "constructor-new" },
        { title: "Optional chaining '?.'", slug: "optional-chaining" },
        { title: "Symbol type", slug: "symbol-type" },
        {
          title: "Object to primitive conversion",
          slug: "object-to-primitive",
        },
      ],
    },

    {
      id: "data-types",
      title: "Data Types",
      lessons: [
        { title: "Methods of primitives" },
        { title: "Numbers" },
        { title: "Strings" },
        { title: "Arrays" },
        { title: "Array methods" },
        { title: "Iterables" },
        { title: "Map and Set" },
        { title: "WeakMap and WeakSet" },
        { title: "Object.keys, values, entries" },
        { title: "Destructuring assignment" },
        { title: "Date and time" },
        { title: "JSON methods, toJSON" },
      ],
    },

    {
      id: "advanced-functions",
      title: "Advanced Working With Functions",

      lessons: [
        { title: "Recursion and stack" },
        { title: "Rest parameters and spread syntax" },
        { title: "Variable scope, closure" },
        { title: 'The old "var"' },
        { title: "Global object" },
        { title: "Function object, NFE" },
        { title: 'The "new Function" syntax' },
        { title: "Scheduling: setTimeout and setInterval" },
        { title: "Decorators and forwarding, call/apply" },
        { title: "Function binding" },
        { title: "Arrow functions revisited" },
      ],
    },

    {
      id: "prototypes",
      title: "Prototypes & Inheritance",

      lessons: [
        { title: "Prototypal inheritance" },
        { title: "F.prototype" },
        { title: "Native prototypes" },
        { title: "Prototype methods" },
      ],
    },

    {
      id: "classes",
      title: "Classes",

      lessons: [
        { title: "Class basic syntax" },
        { title: "Class inheritance" },
        { title: "Static properties and methods" },
        { title: "Private and protected properties" },
        { title: "Extending built-in classes" },
        { title: 'Class checking: "instanceof"' },
        { title: "Mixins" },
      ],
    },

    {
      id: "async",
      title: "Promises, Async/Await",

      lessons: [
        { title: "Introduction: callbacks" },
        { title: "Promise" },
        { title: "Promises chaining" },
        { title: "Error handling with promises" },
        { title: "Promise API" },
        { title: "Promisification" },
        { title: "Microtasks" },
        { title: "Async/await" },
      ],
    },

    {
      id: "modules",
      title: "Modules",
      lessons: [
        { title: "Modules introduction" },
        { title: "Export and Import" },
        { title: "Dynamic imports" },
      ],
    },

    {
      id: "browser",
      title: "Browser: Document, Events, Interfaces",

      subsections: [
        {
          title: "Document",
          lessons: [
            { title: "Browser environment, specs" },
            { title: "DOM tree" },
            { title: "Walking the DOM" },
            { title: "Searching: querySelector" },
            { title: "Node properties" },
            { title: "Attributes and properties" },
            { title: "Modifying the document" },
          ],
        },

        {
          title: "Events",
          lessons: [
            { title: "Introduction to browser events" },
            { title: "Bubbling and capturing" },
            { title: "Event delegation" },
            { title: "Browser default actions" },
            { title: "Dispatching custom events" },
          ],
        },

        {
          title: "UI Events",
          lessons: [
            { title: "Mouse events" },
            { title: "Pointer events" },
            { title: "Keyboard events" },
            { title: "Scrolling" },
          ],
        },

        {
          title: "Forms",
          lessons: [
            { title: "Form properties and methods" },
            { title: "focus and blur" },
            { title: "input and change events" },
            { title: "submit event" },
          ],
        },
      ],
    },
  ],
};

// let i = javascriptCourse.sections[4].lessons[1].title  ;
//  console.log(i);

let sections_dataTypes = document.querySelector(".sections_dataTypes");
let main = document.querySelector(".main");

for (const element of javascriptCourse.sections[4].lessons) {
  console.log(element.title);
  
  let section = document.createElement("div");
  section.classList.add("sections_dataTypes");

  section.innerText = element.title;

  main.append(section);
}
