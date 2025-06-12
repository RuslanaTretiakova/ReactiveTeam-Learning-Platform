export default function Hoisting() {
  return (
    <div className="container">
      <h1>Hoisting</h1>

      <section>
        <h2>Definition</h2>
        <p>
          Hoisting is JavaScript's default behavior of moving declarations to
          the top of their scope before code execution. Only declarations are
          hoisted, not initializations. This means that you can reference
          variables and functions before they are defined in the code, but the
          behavior depends on how they are declared. It's important to note that
          hoisting occurs during the compilation phase, before any code is
          executed, and affects how scopes are interpreted.
        </p>
      </section>

      <section>
        <h2>Variable Hoisting</h2>

        <h3>var</h3>
        <pre>
          {`console.log(a); // undefined - 'a' is hoisted and initialized with undefined
var a = 5;`}
        </pre>

        <h3>let / const</h3>
        <pre>
          {`console.log(b); // ReferenceError - 'b' is hoisted but not initialized (TDZ)
let b = 10;`}
        </pre>
      </section>

      <section>
        <h2>Function Hoisting</h2>

        <h3>Function Declaration</h3>
        <pre>
          {`greet(); // Hello! - full function is hoisted and can be called before its definition
function greet() {
  console.log("Hello!");
}`}
        </pre>

        <h3>Function Expression</h3>
        <pre>
          {`sayHi(); // TypeError - 'sayHi' is hoisted as a variable but not assigned yet
const sayHi = function() {
  console.log("Hi!");
};`}
        </pre>
      </section>

      <section>
        <h2>Tricky Cases</h2>
        <pre>
          {`console.log(hello); // function - function declaration is hoisted above var
var hello = 3;
function hello() {
  console.log("Hi");
}
console.log(hello); // 3 - the function is overridden by the var assignment`}
        </pre>
      </section>
      <section>
        <h2>Summary Table</h2>
        <table className="hoisting-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Hoisted?</th>
              <th>Initialized?</th>
              <th>Accessible before declaration?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>var</td>
              <td>Yes</td>
              <td>Yes (undefined)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>let / const</td>
              <td>Yes</td>
              <td>No (TDZ)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Function Declaration</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Function Expression</td>
              <td>Variable only</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
