import { useState } from 'react';
import './App.css'


function Btn({ text, onClick }) {
  return <button
    onClick={onClick}
    style={{
      backgroundColor: "tomato",
      color: "white",
      padding: "10px 20px",
      border: 0,
      borderRadius: 10.
    }}>{text}</button>
}

function ConfirmBtn() {
  return <button>Confirm</button>
}

export default function App() {

  const [value, setValue] = useState("");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <Btn text={value} onClick={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}