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
      <Anecdotes />
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

const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
    console.log(selected);
  };

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const indexOfMax = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    var max = arr[0]
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++ ) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }
    return max === 0 ? null : maxIndex // if none of the array has votes, make sure to render nothing
  }

  if (selected === null)
    return (
      <>
        <p>No Quote Selected</p>
        <Button onClick={handleRandomClick} text="random quote generator" />
      </>
    );
    console.table(anecdotes)
  console.log(anecdotes[indexOfMax(votes)])
  return (
    <>
      <div>
        <h1>Anecodotes of the day</h1>
        <p>
          {anecdotes[selected]} has {`${votes[selected]} votes`}
        </p>
        <Button onClick={handleVoteClick} text="Vote" />
        <Button onClick={handleRandomClick} text="random quote generator" />
      </div>
      <div>
        <h1>Anecdotes with most votes</h1>
        <p>{anecdotes[indexOfMax(votes)]}</p>
        
        
      </div>
    </>
  );
};

export default App;
