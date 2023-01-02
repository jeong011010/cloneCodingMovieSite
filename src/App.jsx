import { useState } from 'react';
import './App.css'

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  }
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>         <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>         <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>
        {inverted ? "Turn back" : "Invert"}
      </button>
    </div>
  )
}
function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  }
  return (
    <div>
      <div>
        <label htmlFor="Km">Km</label>
        <input
          value={inverted ? amount * 1.609 : amount}
          id="Km"
          placeholder="Km"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="Miles">Miles</label>         <input
          value={inverted ? amount : (amount / 1.609).toFixed(5)}
          id="Miles"
          placeholder="Miles"
          type="number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>
        {inverted ? "Turn back" : "Invert"}
      </button>
    </div>
  )
}


export default function App() {
  const [index, setIndex] = useState("0");
  const onSelect = (e) => {
    setIndex(e.target.value);
  }
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {index === "0" ? <MinutesToHours/> : null}
      {index === "1" ? <KmToMiles/> : null}
      
    </div>
  )
}