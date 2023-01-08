import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // toDos의 값을 가져 오기 위한 인수 (currentArray), ...currentArray = toDos의 값들
    setToDo("");
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=>(<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
