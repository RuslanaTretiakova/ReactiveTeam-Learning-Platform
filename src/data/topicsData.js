export const topicsData = {
  'object-iterable': {
    title: 'Object Iterable',
    sections: [
      {
        heading: 'Definition',
        content: [
          'In JavaScript, an **iterable** is any object that defines its own iteration behavior, allowing it to be used in loops that expect iterable values, such as `for...of`. An object is considered iterable if it implements a special method named `Symbol.iterator`.',
          'The `Symbol.iterator` method is a built-in symbol that specifies the default iterator for an object. When this method is called, it must return an **iterator** — an object that has a `next()` method. Each call to `next()` should return an object with two properties:',
          '- `value`: The next value in the sequence.',
          '- `done`: A boolean that is `true` when there are no more values to return.',
          'This iteration protocol enables an object to be compatible with JavaScript’s looping constructs and syntax features. When you use constructs like `for...of`, the spread operator (`[...iterable]`), or functions like `Array.from()`, JavaScript looks for the object’s `Symbol.iterator` method and uses it to retrieve values one by one.',
          'Many built-in types like arrays, strings, maps, and sets are iterable by default because they come with a predefined `Symbol.iterator`. However, plain objects (`{}`) do not implement this method by default, which is why they cannot be used directly with these features unless customized.'
        ]
      },
      {
        heading: 'Built-in Iterables',
        content: [
          '- Arrays',
          '- Strings',
          '- Maps',
          '- Sets',
          '- Typed Arrays',
          '- Generators',
          'All of these support `Symbol.iterator` by default.'
        ]
      },
      {
        heading: 'Plain Objects Are Not Iterable',
        content: [
          "Plain objects do not implement `Symbol.iterator`, and thus you can't use them with `for...of` or spread syntax.",
          '```js\nconst obj = { a: 1, b: 2 };\nconsole.log([...obj]); // TypeError\n```'
        ]
      },
      {
        heading: 'Making an Object Iterable',
        content: [
          'You can define `Symbol.iterator` manually to make a plain object iterable:',
          "```js\nconst user = {\n  name: 'Anna',\n  age: 25,\n  [Symbol.iterator]() {\n    const entries = Object.entries(this);\n    let index = 0;\n    return {\n      next() {\n        if (index < entries.length) {\n          return { value: entries[index++], done: false };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\nconsole.log([...user]);\n```"
        ]
      },
      {
        heading: 'Summary Table',
        table: {
          head: [
            'Type',
            'Iterable?',
            'Can use for...of?',
            'Needs Symbol.iterator?'
          ],
          rows: [
            ['Array', 'Yes', 'Yes', 'No (built-in)'],
            ['Object', 'No', 'No', 'Yes (manual)'],
            ['Map / Set', 'Yes', 'Yes', 'No (built-in)']
          ]
        }
      }
    ]
  },
  hoisting: {
    title: 'Hoisting',
    sections: [
      {
        heading: 'Definition',
        content: [
          "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. Only declarations are hoisted, not initializations. This means that you can reference variables and functions before they are defined in the code, but the behavior depends on how they are declared. It's important to note that hoisting occurs during the compilation phase, before any code is executed, and affects how scopes are interpreted."
        ]
      },
      {
        heading: 'Variable Hoisting',
        content: [
          '**var**',
          "```js\nconsole.log(a); // undefined - 'a' is hoisted and initialized with undefined\nvar a = 5;\n```",
          '**let / const**',
          "```js\nconsole.log(b); // ReferenceError - 'b' is hoisted but not initialized (TDZ)\nlet b = 10;\n```"
        ]
      },
      {
        heading: 'Function Hoisting',
        content: [
          '**Function Declaration**',
          '```js\ngreet(); // Hello! - full function is hoisted and can be called before its definition\nfunction greet() {\n  console.log(\"Hello!\");\n}\n```',
          '**Function Expression**',
          '```js\nsayHi(); // TypeError - \'sayHi\' is hoisted as a variable but not assigned yet\nconst sayHi = function() {\n  console.log(\"Hi!\");\n};\n```'
        ]
      },
      {
        heading: 'Tricky Cases',
        content: [
          '```js\nconsole.log(hello); // function - function declaration is hoisted above var\nvar hello = 3;\nfunction hello() {\n  console.log(\"Hi\");\n}\nconsole.log(hello); // 3 - the function is overridden by the var assignment\n```'
        ]
      },
      {
        heading: 'Summary Table',
        table: {
          head: [
            'Type',
            'Hoisted?',
            'Initialized?',
            'Accessible before declaration?'
          ],
          rows: [
            ['var', 'Yes', 'Yes (undefined)', 'Yes'],
            ['let / const', 'Yes', 'No (TDZ)', 'No'],
            ['Function Declaration', 'Yes', 'Yes', 'Yes'],
            ['Function Expression', 'Variable only', 'No', 'No']
          ]
        }
      }
    ]
  },
  'object-methods': {
    title: 'Object Static Methods',
    sections: [
      {
        heading: 'Definition',
        content: [
          'Static Object methods in JavaScript are functions that belong to the global `Object` class. They are not called on object instances, but on the `Object` itself. These methods are useful for inspecting, transforming, copying, freezing, and working with objects in various ways.'
        ]
      },
      {
        heading: 'Common Static Methods',
        content: [
          '**Object.keys()**',
          '```js\nconst obj = { name: "Alice", age: 25 };\nconsole.log(Object.keys(obj));\n// ["name", "age"]\n```',
          '**Object.values()**',
          '```js\nconsole.log(Object.values(obj));\n// ["Alice", 25]\n```',
          '**Object.entries()**',
          '```js\nconsole.log(Object.entries(obj));\n// [["name", "Alice"], ["age", 25]]\n```',
          '**Object.fromEntries()**',
          '```js\nconst entries = [["name", "Bob"], ["age", 30]];\nconsole.log(Object.fromEntries(entries));\n// { name: "Bob", age: 30 }\n```',
          '**Object.assign()**',
          '```js\nconst target = { a: 1 };\nconst source = { b: 2 };\nconsole.log(Object.assign(target, source));\n// { a: 1, b: 2 }\n```',
          '**Object.freeze()**',
          '```js\nconst settings = { darkMode: true };\nObject.freeze(settings);\nsettings.darkMode = false;\nconsole.log(settings.darkMode);\n// true\n```',
          '**Object.seal()**',
          '```js\nconst user = { role: "admin" };\nObject.seal(user);\nuser.role = "editor"; // allowed\nuser.age = 30;        // ignored\nconsole.log(user);\n// { role: "editor" }\n```',
          '**Object.hasOwn()**',
          '```js\nconst person = { name: "Eva" };\nconsole.log(Object.hasOwn(person, "name"));\n// true\n```',
          '**Object.is()**',
          '```js\nconsole.log(Object.is(NaN, NaN));\n// true\nconsole.log(Object.is(+0, -0));\n// false\n```'
        ]
      },
      {
        heading: 'Summary Table',
        table: {
          head: ['Method', 'Description', 'Notes'],
          rows: [
            [
              'Object.keys()',
              'Returns an array of property names',
              'Own, enumerable only'
            ],
            [
              'Object.values()',
              'Returns an array of property values',
              'Own, enumerable only'
            ],
            [
              'Object.entries()',
              'Returns key-value pairs',
              'Useful for iteration'
            ],
            [
              'Object.fromEntries()',
              'Builds an object from key-value pairs',
              'Reverse of entries'
            ],
            [
              'Object.assign()',
              'Copies properties to target object',
              'Shallow copy'
            ],
            ['Object.freeze()', 'Makes object immutable', 'Top-level only'],
            ['Object.seal()', 'Locks object structure', 'Allows value changes'],
            [
              'Object.hasOwn()',
              'Checks for own property',
              'Safer than hasOwnProperty()'
            ],
            ['Object.is()', 'Compares values', 'More precise than ===']
          ]
        }
      }
    ]
  },
  'temporal-dead-zone': {
  title: 'Temporal Dead Zone',
  sections: [
    {
      heading: 'Definition',
      content: [
        '*TDZ* - it is the area where a varaiable is inaccessible until the moment the computer completely initializes it with a value.',
        '- The block is a pair of brakets `{ ... }` used to group multiply statements.',
        '- *Initialiazation* occurs when you assign an initial value to a variable.',
        'Your attempt to access variable before completely initilization will throw *Reference error*'
      ]
    },
    {
      heading: 'The scope of TDZ',
      content: [
        "A block's TDZ starts at the beginning of the block's local scope. It ends when the computer fully initialize your variable with a value.",
        '```js\n{\n  // TDZ starts here\n  // TDZ continues here\n  console.log(bestFood); // ReferenceError because bestFood\'s TDZ continues here\n  let bestFood = \'Vegetables\'; // bestFood\'s TDZ ends here\n  // bestFood\'s TDZ doesn\'t exist here\n}\n```'
      ]
    },
    {
      heading: 'Differs TDZ for var, let and const',
      content: [
        'The main differnce between *var*, *let* and *const* TDZ is when their TDZ ends',
        '```js\n{\n  // TDZ strats and ends here\n  console.log(bestFood); // returns undefined because TDZ doesn\'t exist here\n  var bestFood = \'Vegetable\'; //  TDZ doesn\'t exist here\n  console.log(bestFood) // returns \'Vegetable\'\n  // bestFood\'s TDZ doesn\'t exist here\n}\n```'
      ]
    }
  ]
},
'property-flag-and-descriptors': {
  title: 'Property flag & descriptors',
  sections: [
    {
      heading: 'Property flags',
      content: [
        '- *writable* - if true, the value can be changed, otherwise it’s read-only.',
        '- *enurable* – if true, then listed in loops, otherwise not listed.',
        '- *configurable* - if true, the property can be deleted and these attributes can be modified, otherwise not.',
        'The method **Object.getOwnPropertyDescriptor** allows to query the full information about a property.',
       '```js\n let user = {name: "John"};\n let descriptor = Object.getOwnPropertyDescriptor(user, "name");\n alert( JSON.stringify(descriptor, null, 2 ) ); \n /* property descriptor:\n  {\n    "value": "John",\n    "writable": true,\n    "enumerable": true,\n    "configurable": true\n  }\n */\n```',

        'To change the flags, we can use **Object.defineProperty**.',
        '```js\nlet user = {};\n\nObject.defineProperty(user, "name", {\n value: "John"\n});\n\n let descriptor = Object.getOwnPropertyDescriptor(user, "name");\n\n alert( JSON.stringify(descriptor, null, 2 ));\n\n /*\n  {\n    "value": "John",\n    "writable": false,\n    "enumerable": false,\n    "configurable": false\n  }\n*/\n```'
      ]
    },
    {
     heading: 'Object.defineProperties',
      content: [
        'There’s a method *Object.defineProperties(obj, descriptors)* that allows to define many properties at once.',
        '```js\nObject.defineProperties(user, {\n name: { value: "John", writable: false },\n surname: { value: "Smith", writable: false },\n // ...\n});\n```',
        'To create clone of object with object flags we have to use:',
        '```js\n let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))\n ```'
      ]
    },
    
  ]
},
'loop-through-object-keys': {
  title: 'Loop through Object keys',
  sections: [
    {
      heading: 'for...in loop (basic)',
      content: [
       '```js\n for (const key in userMap) {\n  console.log(key, userMap[key]);\n }\n```',
      ]
    },
     {
      heading: 'Object.keys()',
      content: [
       '```js\n Object.keys(userMap).forEach((key) => {\n  console.log(key, userMap[key]);\n });\n```',
      ]
    },
     {
      heading: 'Object.entries() (for key-value pairs)',
      content: [
       '```js\n for (const [key, value] of Object.entries(userMap)) {\n  console.log(key, value);\n } \n```',
      ]
    }        
  ]
},
'flatten-nested-array': {
  title: 'Flatten nested array',
  sections: [
    {
      heading: 'Use flat() (built-in)',
      content: [
       '```js\n const nested = [1, [2, [3, [4]], 5]];\n const flat = nested.flat(Infinity); \n console.log(flat); // [1, 2, 3, 4, 5]\n```',
      ]
    },
     {
      heading: 'Recursive function (manual approach)',
      content: [
       '```js\n function flattenArray(arr) {\n    return arr.reduce((acc, val) => \n      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),[]);\n }\n```',
      ]
    },
     {
      heading: 'Iterative with stack (alternative)',
      content: [
       '```js\n function flattenIterative(arr) {\n  const stack = [...arr];\n  const result = [];\n  while (stack.length) {\n    const next = stack.pop();\n    if (Array.isArray(next)) {\n      stack.push(...next); // preserve elements\n    } else {\n      result.push(next);\n    }\n  }\n  return result.reverse(); // because we used pop\n }\n```',
      ]
    }        
  ]
},
'filter-array': {
  title: 'Filter array',
  sections: [
    {
      heading: 'Filtering Arrays with .filter()',
      content: [
        'The *.filter()* method creates a new array with only the elements that pass a condition (i.e., the callback returns true).',
       '```js\nconst numbers = [4, 12, 7, 19, 3];\n const filtered = numbers.filter(num => num > 10);\n console.log(filtered); // [12, 19]\n```',
      ]
    }
  ]
},
'variable-visible-area': {
  title: 'Variable visible area',
  sections: [
    {
      heading: 'Scopes:',
      content: [
        'Scope determines the accessibility (visibility) of variables.',
        'JavaScript variables have 3 types of scope:',
        '- Block scope',
        '- Function scope',
        '- Global scope',
    
      ]
    },
     {
      heading: 'Block scope',
      content: [
        '*let* and *const* provides **Block scope** in JS.',
        'Variables declared inside a { } block cannot be accessed from outside the block:',
        '```js\n {\n    let x = 2;\n }\n\n // x can NOT be used here \n```',
        'Variables declared with the var keyword can NOT have block scope.',
        'Variables declared inside a { } block can be accessed from outside the block.',
        '```\n {\n    var x = 2;\n }\n\n // x CAN be used here \n```'
    
      ]
    },
    {
      heading: 'Local scope',
      content: [
        'Variables declared within a JavaScript function, are **LOCAL** to the function:',
        '```js\n  // code here can NOT use carName\n\n  function myFunction() {\n    let carName = "Volvo";\n\n  // code here CAN use carName\n  }\n\n  // code here can NOT use carName \n```',
        'Local variables have Function Scope: They can only be accessed from within the function.',
        'Local variables are created when a function starts, and deleted when the function is completed.'
       
    
      ]
    },
     {
      heading: 'Function scope',
      content: [
        'Each function has a new scope',
        'Variables defined inside a function are not accessible (visible) from outside the function.',
        '```js\n  function myFunction() {\n    let carName = "Volvo";   // Function Scope\n  }'    
      ]
    },
    {
      heading: 'Global scope',
      content: [
        'Variables declared outside function have Global scope.',
        'Global variables can be accessed from anywhere in a JavaScript program.',
      ]
    },

  ]
},
'copy-array-part': {
  title: 'Copy Array Part',
  sections: [
    {
      heading: 'Definition',
      content: [
        'In JavaScript, copying part of an array means creating a new array containing a subset of elements from an existing one.',
        'This is useful when you want to manipulate or read a portion of data without affecting the original array.',
        'Common methods for this include `slice()`, `splice()`, the spread operator (`...`), and `Array.from()`.'
      ]
    },
    {
      heading: 'Using slice()',
      content: [
        'The `slice()` method returns a shallow copy of a portion of an array.',
        '- It does **not** modify the original array.',
        '- Syntax: `array.slice(startIndex, endIndex)` (end index is not included)',
        '```js\nconst arr = [10, 20, 30, 40, 50];\nconst part = arr.slice(1, 4);\nconsole.log(part); // [20, 30, 40]\n```'
      ]
    },
    {
      heading: 'Using splice()',
      content: [
        'The `splice()` method removes elements from an array and returns them.',
        '- It **modifies** the original array.',
        '- Syntax: `array.splice(startIndex, deleteCount)`',
        '```js\nconst arr = [10, 20, 30, 40, 50];\nconst part = arr.splice(1, 3);\nconsole.log(part); // [20, 30, 40]\n```'
      ]
    },
    {
      heading: 'Using Spread Operator',
      content: [
        'The spread operator can be used with `slice()` to copy a portion of an array in a more concise way.',
        '```js\nconst arr = [1, 2, 3, 4, 5];\nconst part = [...arr.slice(2, 4)];\nconsole.log(part); // [3, 4]\n```'
      ]
    },
    {
      heading: 'Using Array.from() with slice()',
      content: [
        '`Array.from()` can be used to convert a sliced portion of an array into a new array.',
        '```js\nconst arr = [1, 2, 3, 4, 5];\nconst part = Array.from(arr.slice(1, 3));\nconsole.log(part); // [2, 3]\n```'
      ]
    },
    {
      heading: 'Summary Table',
      table: {
        head: ['Method', 'Modifies Original?', 'Returns New Array?', 'Example'],
        rows: [
          ['slice()', 'No', 'Yes', 'arr.slice(1, 4)'],
          ['splice()', 'Yes', 'Yes', 'arr.splice(1, 3)'],
          ['Spread + slice()', 'No', 'Yes', '[...arr.slice(2, 4)]'],
          ['Array.from() + slice()', 'No', 'Yes', 'Array.from(arr.slice(1, 3))']
        ]
      }
    }
  ]
},
'array-iterating-sorting-filtering': {
  title: 'Arrays Iterating, Sorting, Filtering',
  sections: [
    {
      heading: 'Definition',
      content: [
        'JavaScript arrays provide various methods to iterate over, sort, and filter data. These capabilities are essential for working with lists of items, transforming them, or organizing them based on custom criteria.'
      ]
    },
    {
      heading: 'Iterating Over Arrays',
      content: [
        'Common ways to iterate over arrays include:',
        '- `for` loop: classic index-based iteration.',
        '- `for...of`: loop through array values directly.',
        '- `forEach()`: executes a function for each element.',
        '- `map()`: returns a new array after applying a function to each element.',
        '- `reduce()`: accumulates values to a single result.',
        '```js\nconst arr = [1, 2, 3];\narr.forEach(n => console.log(n));\n```'
      ]
    },
    {
      heading: 'Filtering Arrays',
      content: [
        'The `filter()` method returns a new array with only the elements that pass a test provided by a function.',
        '- Original array remains unchanged.',
        '```js\nconst numbers = [1, 2, 3, 4, 5];\nconst even = numbers.filter(n => n % 2 === 0);\nconsole.log(even); // [2, 4]\n```'
      ]
    },
    {
      heading: 'Sorting Arrays',
      content: [
        'By default, `sort()` converts elements to strings and compares them in Unicode code point order.',
        '```js\nconst nums = [10, 5, 2];\nnums.sort();\nconsole.log(nums); // [10, 2, 5]\n```',
        'This can lead to unexpected results when sorting numbers.'
      ]
    },
    {
      heading: 'Custom Sorting for Arrays',
      content: [
        'You can provide a `compareFunction` to the `sort()` method for custom sorting logic.',
        'Rules of compare function:',
        '- If return < 0 → `a` comes before `b`',
        '- If return > 0 → `b` comes before `a`',
        '- If return === 0 → `a` and `b` are equal in order',
        'Sorting numbers ascending:',
        '```js\nconst nums = [10, 5, 2];\nnums.sort((a, b) => a - b);\nconsole.log(nums); // [2, 5, 10]\n```',
        'Sorting descending:',
        '```js\nnums.sort((a, b) => b - a);\n```',
        'Sorting strings by length:',
        '```js\nconst words = ["sun", "banana", "cat"];\nwords.sort((a, b) => a.length - b.length);\n```',
        'Sorting objects by property:',
        '```js\nconst users = [\n  { name: "Alice", age: 30 },\n  { name: "Bob", age: 25 }\n];\nusers.sort((a, b) => a.age - b.age);\n```'
      ]
    },
    {
      heading: 'Summary Table',
      table: {
        head: ['Method', 'Purpose', 'Mutates Original?', 'Returns New Array?'],
        rows: [
          ['forEach()', 'Iterate for side effects', 'No', 'No'],
          ['map()', 'Transform items', 'No', 'Yes'],
          ['filter()', 'Remove unwanted items', 'No', 'Yes'],
          ['sort()', 'Sort items (customizable)', 'Yes', 'No']
        ]
      }
    }
  ]
},
'nested-scopes': {
  title: 'Nested Scopes',
  sections: [
    {
      heading: 'Definition',
      content: [
        'A **nested scope** in JavaScript is a scope that exists within another scope. Functions or blocks defined inside other functions create these inner scopes.',
        'Each nested scope has access to its own variables, and to those declared in any outer scopes.',
        'This creates a hierarchical scope structure known as the **scope chain**.'
      ]
    },
    {
      heading: 'Scope Chain',
      content: [
        'When JavaScript looks for a variable, it searches through the **scope chain**:',
        '- It starts in the current (local) scope.',
        '- If not found, it moves up to the parent scope.',
        '- This continues until the variable is found or the global scope is reached.',
        '```js\nfunction outer() {\n  const a = "A";\n  function inner() {\n    const b = "B";\n    console.log(a); // found in outer scope\n  }\n  inner();\n}\n```'
      ]
    },
    {
      heading: 'Shadowing',
      content: [
        '**Shadowing** happens when a variable in a nested scope has the same name as one in an outer scope.',
        'The inner variable "shadows" the outer one — it takes precedence within its own scope.',
        '```js\nlet value = "outer";\nfunction demo() {\n  let value = "inner";\n  console.log(value); // "inner"\n}\n```'
      ]
    },
    {
      heading: 'Working with Nested Scopes',
      content: [
        'Nested scopes are useful for:',
        '- Isolating logic and variables.',
        '- Creating private helpers inside functions.',
        '- Implementing closures.',
        'Closures are functions that “remember” variables from the scope in which they were created.',
        '```js\nfunction makeCounter() {\n  let count = 0;\n  return function () {\n    return ++count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```'
      ]
    },
    {
      heading: 'Summary Table',
      table: {
        head: ['Concept', 'Description'],
        rows: [
          ['Nested Scope', 'Scope defined inside another scope'],
          ['Scope Chain', 'The chain of parent scopes for variable resolution'],
          ['Shadowing', 'Inner variable overrides outer variable'],
          ['Closure', 'Function retaining access to its outer scope variables']
        ]
      }
    }
  ]
},'function-parameters-arguments': {
  title: 'Functions Parameters / Arguments',
  sections: [
    {
      heading: 'Definition',
      content: [
        'In JavaScript, **parameters** are the variables listed in the function definition, while **arguments** are the actual values passed to the function when it is called.',
        'A function can have any number of parameters, including none, one, or many. JavaScript also allows default values and dynamic argument handling.'
      ]
    },
    {
      heading: 'Defining Function Parameters',
      content: [
        'You can define one or more parameters in a function declaration:',
        '```js\nfunction greet(name, age) {\n  console.log(`Hello, ${name}. You are ${age} years old.`);\n}\ngreet("Alice", 30);\n```',
        '- Parameters are positional: the first argument matches the first parameter, and so on.',
        '- You can also assign **default values** to parameters:',
        '```js\nfunction greet(name = "Guest") {\n  console.log(`Hello, ${name}`);\n}\ngreet(); // "Hello, Guest"\n```'
      ]
    },
    {
      heading: 'Passing by Value (Primitives)',
      content: [
        'When you pass **primitive values** (like numbers, strings, booleans) to a function, JavaScript passes a **copy** of the value.',
        'Modifying the parameter inside the function does **not** affect the original variable.',
        '```js\nfunction change(x) {\n  x = 10;\n}\nlet num = 5;\nchange(num);\nconsole.log(num); // 5\n```',
        '- This is called **pass by value**.'
      ]
    },
    {
      heading: 'Passing by Reference (Objects & Arrays)',
      content: [
        'When passing **objects** or **arrays**, JavaScript still passes **by value**, but the value is a **reference** to the object in memory.',
        'This means the function can mutate the original object.',
        '```js\nfunction update(obj) {\n  obj.name = "Updated";\n}\nconst user = { name: "Original" };\nupdate(user);\nconsole.log(user.name); // "Updated"\n```',
        '- However, if you reassign the parameter itself, the reference is lost:',
        '```js\nfunction reassign(obj) {\n  obj = { name: "New" };\n}\nreassign(user);\nconsole.log(user.name); // "Updated"\n```'
      ]
    },
    {
      heading: 'Dynamic Number of Arguments: arguments object',
      content: [
        'In regular (non-arrow) functions, JavaScript provides an **`arguments` object** that contains all arguments passed.',
        'It is **array-like**, but not a true array.',
        '```js\nfunction sum() {\n  let total = 0;\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i];\n  }\n  return total;\n}\nconsole.log(sum(1, 2, 3)); // 6\n```',
        '- `arguments` does not work in arrow functions.'
      ]
    },
    {
      heading: 'Dynamic Number of Arguments: Rest Parameters',
      content: [
        '**Rest parameters** (`...args`) are the modern way to capture all remaining arguments into a real array.',
        '```js\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6\n```',
        '- You can combine fixed parameters with rest:',
        '```js\nfunction log(type, ...messages) {\n  console.log(`[${type}]`, ...messages);\n}\nlog("info", "Hello", "World");\n```'
      ]
    },
    {
      heading: 'Summary Table',
      table: {
        head: ['Concept', 'Description', 'Notes'],
        rows: [
          ['Parameter', 'Variable in function definition', 'Used as placeholder'],
          ['Argument', 'Actual value passed in call', 'Used during execution'],
          ['Pass by Value', 'Copy of primitive passed', 'Original is unaffected'],
          ['Pass by Reference', 'Reference to object passed', 'Original can be modified'],
          ['arguments object', 'Array-like object for all arguments', 'Legacy, not in arrow functions'],
          ['Rest parameters', 'Captures extra arguments as array', 'Modern, recommended']
        ]
      }
    }
  ]
},'function-default-parameters': {
  title: 'Function Default Parameters',
  sections: [
    {
      heading: 'Definition',
      content: [
        'Function default parameters allow you to assign default values to function parameters if no argument is provided or the argument is explicitly `undefined`.',
        'This feature was added in ECMAScript 2015 (ES6).'
      ]
    },
    {
      heading: 'Basic Usage',
      content: [
        'You can assign a default value directly in the parameter list:',
        '```js\nfunction greet(name = "Guest") {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet();         // Hello, Guest!\ngreet("Alice");  // Hello, Alice!\n```'
      ]
    },
    {
      heading: 'Triggered by undefined Only',
      content: [
        'Default values are only used when the argument is `undefined`, not when it is `null`, `0`, or an empty string:',
        '```js\nfunction log(x = "default") {\n  console.log(x);\n}\n\nlog(undefined); // "default"\nlog(null);      // null\nlog(0);         // 0\nlog("");        // ""\n```'
      ]
    },
    {
      heading: 'Default Values Can Be Expressions',
      content: [
        'Default values can be computed at runtime using expressions:',
        '```js\nfunction generateId(id = Math.random()) {\n  console.log(id);\n}\n\nfunction getDefaultUser() {\n  return { name: "Anonymous" };\n}\n\nfunction createUser(user = getDefaultUser()) {\n  console.log(user);\n}\n```'
      ]
    },
    {
      heading: 'Destructuring with Defaults',
      content: [
        'Default parameters also work with object destructuring:',
        '```js\nfunction drawChart({ size = "big", color = "blue" } = {}) {\n  console.log(size, color);\n}\n\ndrawChart(); // "big", "blue"\n```'
      ]
    },
    {
      heading: 'Parameter Order Consideration',
      content: [
        'Parameters with default values should come after required ones to avoid confusion:',
        '```js\nfunction multiply(a, b = 1) {\n  return a * b;\n}\n```'
      ]
    },
    {
      heading: 'Summary Table',
      table: {
        head: ['Concept', 'Description'],
        rows: [
          ['Default if undefined', 'The parameter uses its default value when passed `undefined`.'],
          ['Null/0/""', 'These values do NOT trigger the default.'],
          ['Expression support', 'Default values can be any valid expression.'],
          ['Destructuring', 'Works seamlessly with object destructuring.'],
          ['Added in', 'ES6 (2015)']
        ]
      }
    }
  ]
},
'ecmascript-modules': {
  title: 'ECMAScript Modules',
  sections: [
    {
      heading: 'Definition',
      content: [
        'ECMAScript Modules (ES Modules or ESM) are the official standard for modular JavaScript code. Introduced in ES6 (2015), they allow developers to split code across multiple files using `import` and `export` statements.'
      ]
    },
    {
      heading: 'Exporting and Importing',
      content: [
        'You can export variables, functions, or classes from one module and import them in another.',
        '```js\n// utils.js\nexport const sum = (a, b) => a + b;\nexport function greet(name) {\n  return `Hello, ${name}`;\n}\n\n// main.js\nimport { sum, greet } from "./utils.js";\nconsole.log(sum(2, 3));\n```'
      ]
    },
    {
      heading: 'Default Exports',
      content: [
        'A module can have one default export, which is typically used for the main functionality.',
        '```js\n// math.js\nexport default function multiply(a, b) {\n  return a * b;\n}\n\n// main.js\nimport multiply from "./math.js";\nconsole.log(multiply(3, 4));\n```'
      ]
    },
    {
      heading: 'Mixing Named and Default Exports',
      content: [
        'Modules can export both named and default values.',
        '```js\n// config.js\nexport const apiUrl = "https://api.example.com";\nexport default function log(msg) {\n  console.log(`[LOG]: ${msg}`);\n}\n\n// app.js\nimport log, { apiUrl } from "./config.js";\n```'
      ]
    },
    {
      heading: 'Module Behavior',
      content: [
        '- Modules are automatically in strict mode.',
        '- Each module has its own scope.',
        '- `import` and `export` must be at the top level.',
        '- Modules are only evaluated once and cached afterward.'
      ]
    },
    {
      heading: 'Using Modules in the Browser',
      content: [
        'To use ES Modules in the browser, set the script type to `module`:',
        '```html\n<script type="module" src="main.js"></script>\n```',
        '- Modules follow CORS policy, so local testing may require a server.',
        '- File paths must be relative or absolute.'
      ]
    },
    {
      heading: 'Dynamic Imports',
      content: [
        'Modules can be loaded on demand using the `import()` function:',
        '```js\nbutton.addEventListener("click", async () => {\n  const module = await import("./utils.js");\n  console.log(module.sum(3, 4));\n});\n```',
        'Dynamic imports return a promise and allow lazy-loading parts of your application.'
      ]
    },
    {
      heading: 'Summary Table',
      table: {
        head: ['Feature', 'Description'],
        rows: [
          ['export / import', 'Used to share and reuse code across files'],
          ['default export', 'Only one allowed per module'],
          ['Scoped', 'Each module runs in its own scope'],
          ['Strict mode', 'All modules use strict mode automatically'],
          ['Dynamic import', 'Loads modules asynchronously using import()'],
          ['Supported since', 'ES6 (2015)']
        ]
      }
    }
  ]
}

}
