export default function ObjectIterable() {
  return (
    <div className="container">
      <h1>Object Iterable</h1>

<section>
  <h2>Definition</h2>
  <p>
    In JavaScript, an <strong>iterable</strong> is any object that defines its own iteration behavior, allowing it to be used in loops that expect iterable values, such as <code>for...of</code>. An object is considered iterable if it implements a special method named <code>Symbol.iterator</code>.
  </p>
  <p>
    The <code>Symbol.iterator</code> method is a built-in symbol that specifies the default iterator for an object. When this method is called, it must return an <strong>iterator</strong> — an object that has a <code>next()</code> method. Each call to <code>next()</code> should return an object with two properties:
  </p>
  <ul>
    <li>
      <code>value</code>: The next value in the sequence.
    </li>
    <li>
      <code>done</code>: A boolean that is <code>true</code> when there are no more values to return.
    </li>
  </ul>
  <p>
    This iteration protocol enables an object to be compatible with JavaScript’s looping constructs and syntax features. When you use constructs like <code>for...of</code>, the spread operator (<code>[...iterable]</code>), or functions like <code>Array.from()</code>, JavaScript looks for the object’s <code>Symbol.iterator</code> method and uses it to retrieve values one by one.
  </p>
  <p>
    Many built-in types like arrays, strings, maps, and sets are iterable by default because they come with a predefined <code>Symbol.iterator</code>. However, plain objects (<code>{}</code>) do not implement this method by default, which is why they cannot be used directly with these features unless customized.
  </p>
</section>

      <section>
        <h2>Built-in Iterables</h2>
        <ul>
          <li>Arrays</li>
          <li>Strings</li>
          <li>Maps</li>
          <li>Sets</li>
          <li>Typed Arrays</li>
          <li>Generators</li>
        </ul>
        <p>These all have a built-in implementation of <code>Symbol.iterator</code>.</p>
      </section>

      <section>
        <h2>Plain Objects Are Not Iterable</h2>
        <p>
          Regular objects <code>{}</code> do not implement <code>Symbol.iterator</code>, and therefore cannot be used with <code>for...of</code> or spread syntax in arrays.
        </p>
        <pre>
{`const obj = { a: 1, b: 2 };
console.log([...obj]);
// TypeError: obj is not iterable`}
        </pre>
      </section>

      <section>
        <h2>Making an Object Iterable</h2>
        <p>
          You can manually add a <code>Symbol.iterator</code> method to make an object iterable:
        </p>
        <pre>
{`const user = {
  name: "Anna",
  age: 25,
  [Symbol.iterator]() {
    const entries = Object.entries(this);
    let index = 0;
    return {
      next() {
        if (index < entries.length) {
          return { value: entries[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log([...user]);
// [["name", "Anna"], ["age", 25]]`}
        </pre>
      </section>

      <section>
        <h2>Summary Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Iterable?</th>
              <th>Can use for...of?</th>
              <th>Needs Symbol.iterator?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No (built-in)</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>No</td>
              <td>No</td>
              <td>Yes (manual)</td>
            </tr>
            <tr>
              <td>Map / Set</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No (built-in)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
