import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good + 1)} text='good' />
      <Button onClick={()=>setNeutral(neutral + 1)} text='nuetral' />
      <Button onClick={()=>setBad(bad + 1)} text='bad' />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = (props) => {
  // conditional rendering?
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>nuetral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>



export default App