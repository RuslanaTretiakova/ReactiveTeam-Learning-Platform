export default function ObjectMethods() {
  return (
    <div className="container">
      <h1>Object Static Methods</h1>

      <section>
        <h2>Definition</h2>
        <p>
          Static Object methods in JavaScript are functions that belong to the
          global <code>Object</code> class. They are not called on object
          instances, but on the <code>Object</code> itself. These methods are
          useful for inspecting, transforming, copying, freezing, and working
          with objects in various ways.
        </p>
      </section>

      <section>
        <h2>Common Static Methods</h2>

        <h3>Object.keys()</h3>
        <pre>
          {`const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj));
// ["name", "age"] - returns an array of the object's own enumerable property names`}
        </pre>

        <h3>Object.values()</h3>
        <pre>
          {`console.log(Object.values(obj));
// ["Alice", 25] - returns an array of the object's own enumerable property values`}
        </pre>

        <h3>Object.entries()</h3>
        <pre>
          {`console.log(Object.entries(obj));
// [["name", "Alice"], ["age", 25]] - returns an array of key-value pairs`}
        </pre>

        <h3>Object.fromEntries()</h3>
        <pre>
          {`const entries = [["name", "Bob"], ["age", 30]];
console.log(Object.fromEntries(entries));
// { name: "Bob", age: 30 } - converts entries back into an object`}
        </pre>

        <h3>Object.assign()</h3>
        <pre>
          {`const target = { a: 1 };
const source = { b: 2 };
console.log(Object.assign(target, source));
// { a: 1, b: 2 } - copies properties from source to target (shallow copy)`}
        </pre>

        <h3>Object.freeze()</h3>
        <pre>
          {`const settings = { darkMode: true };
Object.freeze(settings);
settings.darkMode = false;
console.log(settings.darkMode);
// true - changes are ignored because the object is frozen`}
        </pre>

        <h3>Object.seal()</h3>
        <pre>
          {`const user = { role: "admin" };
Object.seal(user);
user.role = "editor"; // allowed
user.age = 30;        // ignored
console.log(user);
// { role: "editor" } - properties can't be added or removed, but can be modified`}
        </pre>

        <h3>Object.hasOwn()</h3>
        <pre>
          {`const person = { name: "Eva" };
console.log(Object.hasOwn(person, "name"));
// true - checks if the object has this key as its own property`}
        </pre>

        <h3>Object.is()</h3>
        <pre>
          {`console.log(Object.is(NaN, NaN));
// true - correctly identifies that NaN is the same as NaN

console.log(Object.is(+0, -0));
// false - +0 and -0 are considered different`}
        </pre>
      </section>

      <section>
        <h2>Summary Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Description</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Object.keys()</td>
              <td>Returns an array of property names</td>
              <td>Own, enumerable only</td>
            </tr>
            <tr>
              <td>Object.values()</td>
              <td>Returns an array of property values</td>
              <td>Own, enumerable only</td>
            </tr>
            <tr>
              <td>Object.entries()</td>
              <td>Returns key-value pairs</td>
              <td>Useful for iteration</td>
            </tr>
            <tr>
              <td>Object.fromEntries()</td>
              <td>Builds an object from key-value pairs</td>
              <td>Reverse of entries</td>
            </tr>
            <tr>
              <td>Object.assign()</td>
              <td>Copies properties to target object</td>
              <td>Shallow copy</td>
            </tr>
            <tr>
              <td>Object.freeze()</td>
              <td>Makes object immutable</td>
              <td>Top-level only</td>
            </tr>
            <tr>
              <td>Object.seal()</td>
              <td>Locks object structure</td>
              <td>Allows value changes</td>
            </tr>
            <tr>
              <td>Object.hasOwn()</td>
              <td>Checks for own property</td>
              <td>Safer than hasOwnProperty()</td>
            </tr>
            <tr>
              <td>Object.is()</td>
              <td>Compares values</td>
              <td>More precise than ===</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
