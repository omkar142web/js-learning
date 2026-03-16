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
        {
          title: "Methods of primitives",
          Text: `• <b>Overview of the Topic</b>
• Key Ideas and Explanations
• Supporting Details and Examples
• Final Thoughts and Observations

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit voluptate quis eveniet molestias illum doloribus esse. Illum nobis consequatur ab recusandae a rerum veniam quibusdam hic quidem accusamus. Cum eius voluptates harum at numquam est doloremque aperiam repellendus expedita sit ea sunt laborum accusantium consectetur id ipsa labore soluta aliquid debitis dignissimos doloribus in.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid modi quos nesciunt recusandae veniam nostrum doloremque ad autem quae aspernatur soluta accusantium eligendi consequatur quam perspiciatis expedita animi consequuntur magni beatae inventore. Et alias facilis architecto nemo maxime dolorum ab omnis sapiente tempore ipsum inventore repellendus rem vitae sed nam beatae delectus modi similique adipisci eum repudiandae possimus obcaecati.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis quam repellendus provident rem quae nulla reprehenderit iure fuga magni placeat illo sed temporibus consequuntur alias exercitationem voluptates autem voluptate reprehenderit obcaecati. In facilis atque suscipit laudantium facere ea unde accusamus sint optio dolorem harum iste quis animi nisi autem libero eligendi modi culpa doloremque amet minus illo.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis quo enim dolore recusandae corrupti natus iste aut eligendi saepe et eum illum modi nesciunt ipsum tempore magnam amet dignissimos voluptates fuga culpa reiciendis quasi ex. Accusantium corporis odio impedit quidem quam inventore animi officiis magni molestias quo eius saepe ut est omnis laudantium distinctio suscipit excepturi enim ea soluta esse.`,
        },
        { title: "Numbers", Text: "Number - empty for now!!" },
        { title: "Strings", Text: "Strings - empty for now!!" },
        { title: "Arrays", Text: "Arrays - empty for now!!" },
        { title: "Array methods", Text: "Array methods - empty for now!!" },
        { title: "Iterables", Text: "Iterables - empty for now!!" },
        { title: "Map and Set", Text: "Map and Set - empty for now!!" },
        { title: "WeakMap and WeakSet", Text: "WeakMap and WeakSet - empty for now!!" },
        {
          title: "Object.keys, values, entries",
          Text: "Object.keys, values, entries - empty for now!!",
        },
        { title: "Destructuring assignment", Text: "Destructuring assignment - empty for now!!" },
        { title: "Date and time", Text: "Date and time - empty for now!!" },
        { title: "JSON methods, toJSON", Text: "JSON methods, toJSON - empty for now!!" },
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

// let i = javascriptCourse.sections[4].lessons[1].Text  ;
//  console.log(i );

let changingHtmlOfInd_dot_text = javascriptCourse.sections[4].lessons  ;
console.log(changingHtmlOfInd_dot_text );

changingHtmlOfInd_dot_text[0].Text=`<main class="doc">

  <!-- PAGE HEADER -->
  <header class="doc-header">
    <h1 class="doc-title">JavaScript Numbers</h1>
    <p class="doc-description">
      In modern JavaScript there are two types of numbers: regular numbers and BigInt.
    </p>
  </header>


  <!-- NUMBER TYPES -->
  <section class="doc-section" id="number-types">
    <h2 class="section-title">Number Types</h2>

    <article class="concept-block">
      <h3 class="concept-title">Regular Numbers</h3>
      <p class="concept-text">
        JavaScript numbers are stored in <strong>64-bit IEEE-754 double precision format</strong>.
      </p>
    </article>

    <article class="concept-block">
      <h3 class="concept-title">BigInt</h3>
      <p class="concept-text">
        <code>BigInt</code> represents integers of arbitrary length and is used when numbers exceed
        the safe integer range.
      </p>
    </article>
  </section>


  <!-- WRITING LARGE NUMBERS -->
  <section class="doc-section" id="large-numbers">
    <h2 class="section-title">Writing Large Numbers</h2>

    <article class="example-block">
      <h3 class="example-title">Underscore Separator</h3>

      <pre class="code-block"><code>
let billion = 1_000_000_000;
      </code></pre>

      <p class="example-note">
        Underscores improve readability and are ignored by JavaScript.
      </p>
    </article>

    <article class="example-block">
      <h3 class="example-title">Scientific Notation</h3>

      <pre class="code-block"><code>
let billion = 1e9;
let value = 7.3e9;
      </code></pre>

      <p class="example-note">
        <code>e</code> multiplies the number by powers of 10.
      </p>
    </article>
  </section>


  <!-- SMALL NUMBERS -->
  <section class="doc-section" id="small-numbers">
    <h2 class="section-title">Writing Small Numbers</h2>

    <pre class="code-block"><code>
let microSecond = 1e-6;
    </code></pre>

    <p class="section-note">
      Negative exponent divides the number by powers of 10.
    </p>
  </section>


  <!-- NUMERAL SYSTEMS -->
  <section class="doc-section" id="numeral-systems">
    <h2 class="section-title">Hex, Binary and Octal</h2>

    <article class="example-block">
      <pre class="code-block"><code>
let hex = 0xff;
let binary = 0b11111111;
let octal = 0o377;
      </code></pre>
    </article>
  </section>


  <!-- NUMBER BASE CONVERSION -->
  <section class="doc-section" id="base-conversion">
    <h2 class="section-title">Number Base Conversion</h2>

    <article class="example-block">
      <pre class="code-block"><code>
let num = 255;

num.toString(16); // ff
num.toString(2);  // 11111111
      </code></pre>
    </article>

    <article class="note-block">
      <p>
        The base can range from <strong>2 to 36</strong>.
      </p>
    </article>
  </section>


  <!-- ROUNDING -->
  <section class="doc-section" id="rounding">
    <h2 class="section-title">Rounding Methods</h2>

    <table class="data-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Math.floor()</td>
          <td>Rounds down</td>
        </tr>
        <tr>
          <td>Math.ceil()</td>
          <td>Rounds up</td>
        </tr>
        <tr>
          <td>Math.round()</td>
          <td>Rounds to nearest integer</td>
        </tr>
        <tr>
          <td>Math.trunc()</td>
          <td>Removes decimal part</td>
        </tr>
      </tbody>
    </table>

    <article class="example-block">
      <pre class="code-block"><code>
Math.round(3.6);
Math.floor(3.6);
Math.ceil(3.1);
Math.trunc(3.9);
      </code></pre>
    </article>
  </section>


  <!-- TOFIXED -->
  <section class="doc-section" id="tofixed">
    <h2 class="section-title">toFixed()</h2>

    <pre class="code-block"><code>
let num = 12.34;

num.toFixed(1); // "12.3"
num.toFixed(5); // "12.34000"
    </code></pre>

    <p class="section-note">
      The result of <code>toFixed()</code> is a string.
    </p>
  </section>


  <!-- PRECISION -->
  <section class="doc-section" id="precision">
    <h2 class="section-title">Floating Point Precision</h2>

    <pre class="code-block"><code>
0.1 + 0.2 === 0.3
// false

0.1 + 0.2
// 0.30000000000000004
    </code></pre>

    <p class="section-note">
      This happens because decimal fractions cannot always be represented exactly in binary.
    </p>
  </section>


  <!-- NAN AND INFINITY -->
  <section class="doc-section" id="special-values">
    <h2 class="section-title">NaN and Infinity</h2>

    <pre class="code-block"><code>
isNaN("text"); 
isFinite(123);
Number.isNaN(NaN);
Number.isFinite(10);
    </code></pre>
  </section>


  <!-- PARSE FUNCTIONS -->
  <section class="doc-section" id="parse-functions">
    <h2 class="section-title">parseInt and parseFloat</h2>

    <pre class="code-block"><code>
parseInt("100px"); 
parseFloat("12.5em");
    </code></pre>

    <article class="example-block">
      <pre class="code-block"><code>
parseInt("ff", 16); // 255
parseInt("2n9c", 36); // 123456
      </code></pre>
    </article>
  </section>


  <!-- MATH OBJECT -->
  <section class="doc-section" id="math-object">
    <h2 class="section-title">Math Object</h2>

    <pre class="code-block"><code>
Math.random();
Math.max(3, 5, 10);
Math.min(1, 2);
Math.pow(2, 10);
    </code></pre>
  </section>


  <!-- SUMMARY -->
  <section class="doc-section" id="summary">
    <h2 class="section-title">Summary</h2>

    <ul class="summary-list">
      <li>Use <code>e</code> notation for large and small numbers.</li>
      <li>JavaScript supports hex, binary and octal literals.</li>
      <li>Use <code>toString(base)</code> for base conversion.</li>
      <li>Use Math methods for rounding numbers.</li>
      <li>Floating point arithmetic may lose precision.</li>
      <li>Use <code>parseInt</code> and <code>parseFloat</code> for extracting numbers from strings.</li>
    </ul>
  </section>

</main>`;

export default javascriptCourse;
