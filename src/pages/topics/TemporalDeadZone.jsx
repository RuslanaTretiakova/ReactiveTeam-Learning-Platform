export default function TemporalDeadZone() {
  return (
    <div className="container">
      <h1>Temporal Dead Zone</h1>

      <section>
        <h2>Definition</h2>
        <p><em>TDZ</em> - it is the area where a varaiable is inaccessible until the moment the computer completely initializes it with a value.</p>

        <ul>
          <li>The block is a pair of brakets <code>{'{ ... }'}</code> used to group multiply statements.</li>
          <li><em>Initialiazation</em> occurs when you assign an initial value to a variable.</li>
        </ul>

        <p>Your attempt to access variable before completely initilization will throw <em>Reference error</em></p>
      </section>

      <section>
        <h2>The scope of TDZ</h2>
        <p>A block's TDZ starts at the beginning of the block's local scope. It ends when the computer fully initialize your variable with a value.</p>
       <pre>
    <code>
      {`{
  // TDZ starts here
  // TDZ continues here
  console.log(bestFood); // ReferenceError because bestFood's TDZ continues here
  let bestFood = 'Vegetables'; // bestFood's TDZ ends here
  // bestFood's TDZ doesn't exist here
}`}
    </code>
  </pre>
      </section>

      <section>
        <h2>Differs TDZ for <em>var</em>, <em>let</em> and <em>const</em></h2>
        <p>The main differnce between <em>var</em>, <em>let</em> and <em>const</em> TDZ is when their TDZ ends</p>

        <pre><code>
          {`{
  // TDZ strats and ends here
  console.log(bestFood); // returns undefined because TDZ doesn't exist here
  var bestFood = 'Vegetable'; //  TDZ doesn't exist here
  console.log(bestFood) // returns 'Vegetable'
  // bestFood's TDZ doesn't exist here
}`}
        </code></pre>
      </section>
    </div>
  )
}
