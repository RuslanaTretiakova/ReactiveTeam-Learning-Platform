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
        'Each function has a new scope',
        'Variables defined inside a function are not accessible (visible) from outside the function.',
        '```js\n  function myFunction() {\n    let carName = "Volvo";   // Function Scope\n  }'    
      ]
    },

  ]
}
}
