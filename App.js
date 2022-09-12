import React, { useState } from 'react'
const Header = props => <h1>{props.name}</h1>

const Statistic = ({ text, value }) => {
  if (text === "pst") {
    return (
      <tr><td>
        {text} {value} %</td></tr>
    )
  }
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({ clicks }) => {
  const Total = clicks.Good + clicks.Neutral + clicks.Bad
  const avg = (clicks.Good * 1 + clicks.Bad * -1) / Total
  const pst = clicks.Good * (100 / Total)

  if (Total === 0) {
    return (
      <div>
        NO FEEDBACK 🏳️
      </div>
    )
  }
  return (
    <div>
      
      <table>
        <tbody>
          <Statistic text="Good😍" value={clicks.Good} />
          <Statistic text="Neutral😊" value={clicks.Neutral} />
          <Statistic text="Bad😔" value={clicks.Bad} />
          <Statistic text=" OVER ALL" value={Total} />
          <Statistic text="AVGERAGE" value={avg} />
          <Statistic text="positive(+VE)" value={pst} />
        </tbody>
      </table>
    </div>
  )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick} style={{padding:5, borderRadius:40, marginLeft:10, background:'linear-gradient(to right, rgba(106, 133, 182, 0.5), rgba(186, 200, 224, 0.5))'}} >
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    Good: 0, Neutral: 0, Bad: 0
  })

  const handleGoodClick = () =>
    setClicks({ ...clicks, Good: clicks.Good + 1 })

  const handleNeutralClick = () =>
    setClicks({ ...clicks, Neutral: clicks.Neutral + 1 })

  const handleBadClick = () =>
    setClicks({ ...clicks, Bad: clicks.Bad + 1 })

  return (
    <center>
    <div style={{background:'	coral',paddingLeft:50,paddingBottom:50,paddingTop:10}}>
      <Header name="CUSTOMER FEEDBACK🙋 FORM" />
      <Button onClick={handleGoodClick} text='Good'  />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Header name="STATISTICS📊" />
      <Statistics clicks={clicks} />
    </div>
    </center>
  )
}

export default App