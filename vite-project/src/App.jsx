import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="nuetral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <>
        <h1>statistics</h1>
        No feedback given
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
        <tr>
          <td>
            <StatisticLine text="good" value={props.good} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="nuetral" value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="bad" value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="add" value={props.all} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine
              text="average"
              value={(props.good - props.bad) / props.all}
            />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine
              text="positve"
              value={`${props.good / props.all}%`}
            />
          </td>
        </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, value }) => (
  <>
    {text} {value}
  </>  
);

export default App;
