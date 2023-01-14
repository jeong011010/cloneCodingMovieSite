# 💻 React 를 사용하여 영화사이트 클론코딩
([nomadcoders - ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lectures)) 를 수강중<br>
[https://jeong011010.github.io/cloneCodingMovieSite](https://jeong011010.github.io/cloneCodingMovieSite) <- 배포 사이트<br>

## 🌴 목표 및 세부사항
> - 군대 안에서 진행하는 두번째 course 강의. <br>
> - 연등시간에 틈틈이 들으며 클론코딩을 통해 React 기본 문법 및 사용방법에 대해 공부<br>
> - [replit](https://replit.com/@jeong011010/cloneCodingMovieSite#src)(웹 통합개발환경)을 사용하여 코딩중 <br>
>   - ❗용량이 커지면 저장 및 git이 작동하지 않을 수 있음.<br>


# 진행상황

<details>
  <summary> 🐥 1st commit (23.1.2) </summary>
  
## 참고사항
  
※커밋 없이 진행하려고 했었는데, 중간중간 갈아 엎는 부분이 많아서 결과만 남을까봐.. 과정마다 커밋하기로 하였음.
※12월 부터 진행했던 모든 공부 및 개발 과정을 여기 작성

- npx create-react-app 을 사용하여 새로 react 폴더를 생성하였음.
>실행하기 위해 shell에
>```
>cd my-app
>npm start
>```
>작성 후 작업

<!--token:
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
-->

## 공부내용

### State
State : 바뀌는 데이터<br>
useState, setState를 사용하여 state를 초기화 및 변경.<br>
```
const [valueName,setValueFunction] = useState(value)
```
위 양식으로 작성하여 state 선언하며, 이후에는 setValueFunction 함수를 이용하여 state값 변경.
```
setValueFunction(value);
```

React에서 지원하는 useState는 **UI 업데이트시 변경 부분만 자동으로 리렌더링됨** <br><br>

### setState
```
setValueFunction(value+1);
해당 방법 보다는

setValueFunction((value)=>value+1);
해당 방법이 어떤 값을 업데이트 했는지 확실하게 알 수 있음.
```
<br>

### 입력값을 받기(input)

```
onChange={function}
```
input value가 변할 때 마다 함수가 실행됨<br>

변경값 받아올 때
```
const onChange = (e) =>{
  setValueFunction(e.target.value);
}
```
위와 같이 event 함수에서 받아올 수 있다.<br>


## 변환기 프로그램 개발

- 분할 정복 알고리즘과 비슷하게 *component를 나누어 App function에서 합쳐주는 과정* 을 통해 Component의 역할과 사용법 알 수 있었다.
- 자식 component 두개를 만들어 각각 Minutes->Hours, Km->Miles 변환기를 만들었다.
- 위 과정을 통하면 아무리 많은 변환기(함수 및 컴포넌트)가 있어도 코드를 따로 작성하여 관리하고 합쳐줄 수 있다.
- input의 label 의 for 특성을 사용하여 label을 클릭해도 id value가 같은 input이 선택 됨을 알 수 있었다.
- select 및 option 을 사용하여 onChange 함수를 적용할 수 있으며, 응용하여 component를 선택하게 할 수 있었다.

<details>
  <summary>🍇 app.jsx 코드</summary>
 
```js
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
```
</details>
</details>

<details>
  <summary> 🐥 2nd commit (23.1.7) </summary>
  
## 참고사항
  
※없음

## 공부내용

### Props
Props : function에 각각 전해줄 수 있는 인자<br>
C 함수의 매개변수와 같은 느낌이다.<br><br>

하나의 function을 복붙해서 수정하여 사용하면 비효율적이기 때문에, function 하나만 정의 해둔 뒤 바뀌는 값만 props로 넘겨주고 호출하는 형식으로 사용한다. <br><br>
```
function f({propsName}) {
  return <button>{propsName}</button>
}
```
위 양식으로 props를 받을 수 있다.<br>
```
<f propsName="버튼"/>
```
위 양식으로 props를 전달하여 함수를 호출할 수 있다.

## 예제 실습

<details>
  <summary>🍇 app.jsx 코드</summary>
 
```js
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
```
</details>
</details>

<details>
  <summary> 🐥 3rd commit (23.1.7) </summary>
  
## 참고사항
  
※ npx create-react-app 을 사용하기 위해 이전 파일을 전부 삭제 후, my-app 폴더에 생성하였다.<br>

- 앞으로 react를 실행시키기 위해 Shell 창에
```
cd my-app
npm start
```
- 를 작성해준다.
  - 아마 추후에 자동으로 실행되게 만들것이다.

## 공부내용

없음

</details>

<details>
  <summary> 🐥 4th commit (23.1.7) </summary>
  
## 참고사항
  
※ <br>

## 공부내용

- js 파일을 만들어 prop 기능을 사용해봤다.
- 해당 과정에서 CSS를 prop 할 때 **CSS Module** 이라는 것을 사용했다.

*CSS Module* 이란 
- CSS 파일 확장자명을 "module.css"로 작성하며
- 리액트 컴포넌트 파일에서 해당 CSS를 불러올 때 클래스 이름이 전부 고유해진다.
- 클래스 이름에 대하여 고유한 이름들이 만들어져 실수로 CSS 클래스명이 중복될 일이 없다.
<br>

```js
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.Button}>{buttonName}</button>
}
```

- 위와 같이 import로 불러온 styles 객체 안의 값을 참조하여 불러온다.

- **button.Button_btn__F4YlC 와 같이 랜덤한 값으로 styles 이름이 생성되어 중복될 일이 전혀 없다.**

## 예제 실습

<details>
  <summary>🍇 App.js 코드</summary>
 
```js
import Button from "./Button"
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="b1"/>
    </div>
  );
}

export default App;

```
</details>

<details>
  <summary>🍇 App.module.css 코드</summary>
 
```css
.title{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
}

```
</details>

</details>

<details>
  <summary> 🐥 5th commit (23.1.8) </summary>
  
## 참고사항
  
<br>

## 공부내용

**useEffect** <br>
- useEffect: 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
<br>
기본 형태<br>

```js
useEffect(function,deps)
```
<br>

```js
useEffect(function)
```
리렌더링 될 때 마다 function 실행
<br>
```js
useEffect(function,[])
```
deps에 []를 넣을 시, 가장 처음 렌더링 될 때 한번만 실행
<br>
```js 
useEffect(function,[name])
```
name 값이 업데이트 될 때 실행<br>
*배열 안에 ','를 통해 여러개의 값을 넣을 수 있음* <br><br>

---------

**clean up** <br>
- clean up: useEffect를 통해 생성된 컴포넌트가 파괴될 때 실행되는 함수
<br>
useEffect 속 function에서 **return** 을 통해 컴포넌트를 **destroy** 시킬 수 있다.
<br>

## 예제 실습

<details>
  <summary>🍇 UseEffect - App.js 코드</summary>
 
```js
import {useState, useEffect} from "react";

function App() {
  const [counter,SetValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => SetValue((prev) => prev+1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(()=>{console.log("I run only once.")},[]);
  useEffect(()=>{console.log("I run when 'keyword' changes.")},[keyword]);
  useEffect(()=>{console.log("I run when 'counter' changes.")}, [counter]);
  useEffect(()=>{console.log("I run when keyword & counter change")},[keyword, counter]);
  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

```
</details>

<details>
  <summary>🍇 cleanUp - App.js코드</summary>
 
```js
import {useState, useEffect} from "react";

function Hello() {
  useEffect(()=> {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  
  
  return (
    <div>
      
      {showing?<Hello/>:null}
      <button onClick={onClick}>{showing?"Hide":"Show"}</button>
    </div>
  );
}

export default App;

```
</details>
</details>


<details>
  <summary> 🐥 6th commit (23.1.8) </summary>
  
## 참고사항
  
<br>

## 공부내용

### 📝 ToDo list 제작

- toDo 입력을 위한 toDo useState
- toDo 들을 저장하기 위한 toDos useState
- **toDos 에 이전 값에 현재 toDo 값을 더해주는 함수**
  - ```setToDos((currentArray) => [toDo, ...currentArray]);```
  - ...currentArray => 이전 ToDos의 값들

<br>

**map** <br>
value와 index를 인자로 받아 자동으로 for문을 돌려 값을 빼도록 해주는 함수
```js
[].map((item, index)=> {function})
```
- item : 배열 값 이름
- index : 배열안의 인덱스

## 예제 실습

<details>
  <summary>🍇 App.js 코드</summary>
 
```js
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

```
</details>

</details>

<details>
  <summary> 🐥 7th commit (23.1.9) </summary>
  
## 참고사항
  
※ 외출 나갔다와서 졸려서 얼마 못함<br>

- fetch 함수가 'TypeError: Failed to fetch' 에러가 나서 실습 결과를 못본 상황이긴 함.
- 아마 replit 쪽에서 fetch가 에러난것 같긴 한데 잘 모르겠다~

## 공부내용

💰 Coin Tracker 제작<br>

## 예제 실습

<details>
  <summary>🍇 App.js 코드</summary>
 
```js
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading]=useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return(
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading?<strong>Loading...</strong>:null}
      <select>
        {coins.map((coin)=> (
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

```
</details>

</details>

<details>
  <summary> 🐥 8th commit (23.1.10) </summary>
  
## 참고사항
  
※ 마지막에 갑자기 replit이 장고가 났는지 webview가 안나와서 잘 되는지 확인은 못했는데 아마 잘 될거임 ㅋㅋㅋ<br>

## 공부내용

**async, await** <br>
를 배웠지만 해당 내용을 이해하기 위해 필요한 개념이 있었다.<br><br>

---

### 비동기 작업
해당 [velog](https://springfall.cc/post/7)의 도움을 받아 쉽게 이해할 수 있었다. (꾸벅)<br><br>
비동기 작업이란 동기 작업의 반대되는 것으로,<br>
각각의 비동기 작업들이 같은 시간에 시작하여 다른 시간에 끝나는 경우를 뜻한다고 볼 수 있다.<br>
즉, **동시에 여러작업을 수행할 수 있으나, 무엇이 먼저 완료될 지 보장할 수 없다**는 특징을 가지고 있다.<br><br>

**promise와 then**<br>
promise란 비동기 작업을 쉽게 관리할 수 있는 함수이다.<br>
```
const promise = new Promise((resolve, reject) => {});
```
위와 같이 작성하여 promise 객체를 생성한다.<br>
- **resolve** 호출 시 비동기 작업이 **성공**했다는 뜻.
- **reject** 호출 시 비동기 작업이 **실패**했다는 뜻.
<br><br>
**then** 메소드<br>
  : 해당 Promise가 성공했을 때의 동작을 지정한다.<br>
  **catch** 메소드<br>
  : 해당 Promise가 실패했을 때의 동작을 지정한다.<br><br>

그래서 이번 실습에서 api를 Loading 후 가져오는 작업이 비동기 작업에 해당하므로, then을 사용하였다.<br><br>

---

다시 돌아와서, <br>
**async와 await**<br>

async란
- async는 promise 함수를 더욱 간단하게 줄여 사용할 수 있는 함수이다.
- 함수에 async 키워드를 붙이고 선언하면 promise 함수처럼 동작한다는 놀라운 사실!!!
- async 함수의 리턴 값은 무조건 Promise다.
<br>
await란
- Promise가 성공하든 실패하든 끝날 때 까지 기다린 뒤 실행하는 함수이다.
- async 함수 내부에서만 사용할 수 있다.


## 예제 실습

<details>
  <summary>🍇 App.js 코드</summary>
 
```js
import {useState, useEffect} from "react"

function App(){
  const[loading, setLoading] = useState(true);
  const[movies,setMovies]=useState([]);
  const getMovies = async ()=>{
    const json = await(await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` 
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  },[]);
  console.log(movies);
  return(
    <div>
      {loading ? <h1>Loading...</h1>: <div>{movies.map(movie => <div key={movie.id}>
        <img src={movie.medium_cover_image}
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((g)=>(
          <li key={g}>{g}</li>
          ))}
        </ul>
      </div>)}</div>}
    </div>
  );
}

export default App;
```
</details>

</details>

<details>
  <summary> 🐥 9th commit (23.1.11) </summary>
  
## 참고사항
  
React Router 설치 커맨드<br>
```
npm i react-router-dom@5.3.0
```

<br>

Link 사용 후 작동이 안되서 찾아본 결과 [해당 페이지](https://stackoverflow.com/questions/53490431/react-router-dom-not-rendering-components-on-route-change)에서 답을 찾을 수 있었음<br>
Router를 사용하게 될 때, index.js 에서
```js
<React.StrictMode>
  <App />
</React.StrictMode>
```
부분을
```js
<BrowserRouter>
  <App/>
</BrowserRouter>
```
로 바꿔줘야 한다.<br>

## 공부내용

### Routes
**Routing**<br>

- 페이지 이동 기능을 사용할 수 있게 해준다!
- 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 기능
<br>

**Router**<br>

- 사용자가 입력한 주소를 감지하는 역할
<br>
- BrowserRouter : url에 / 뒤에 추가 주소 입력
- HashRouter : url에 해쉬(#)이 붙는다

<br>
React-Router-dom 사용 예시<br>

```js
<Router>
  <Switch> 한번에 하나의 Route만 렌더링 하는 역할
    <Route path=""> URL에 들어갈 주소 ex)"/movie"
      <component1 /> 이동할 컴포넌트
    </Route>
    <Route path="">
      <component2 />
    </Route>
  </Switch>
</Router>
```


## 예제 실습

<details>
  <summary>🍇 App.js 코드</summary>
 
```js
import {useState, useEffect} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```
</details>

<details>
  <summary>🍇 index.js 코드</summary>
 
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);


```
</details>

<details>
  <summary>🍇 Home.js 코드</summary>
 
```js
import {useState, useEffect} from "react"
import Movie from "../components/Movie";

function Home(){
  const[loading, setLoading] = useState(true);
  const[movies,setMovies]=useState([]);
  const getMovies = async ()=>{
    const json = await(await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` 
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  },[]);
  console.log(movies);
  return(
    <div>
      {loading ? <h1>Loading...</h1>: <div>
        {movies.map((movie) => 
          <Movie
          key={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}/>)}
      </div>}
    </div>
  );
}

export default Home;
```
</details>

<details>
  <summary>🍇 Movie.js 코드</summary>
 
```js
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, title, summary, genres}){
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary===""?"none summary":summary}</p>
      <ul>
        {genres.map((g)=>(
        <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes= {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
```
</details>

</details>

<details>
  <summary> 🐥 10th commit (23.1.12) </summary>
  
## 참고사항
  
<br>

## 공부내용

### useParams

- 라우터 파라미터 정보(/:id) 를 가져오는 함수
- URL 값이 바뀔 때 바뀐 부분을 value로 가져올 수 있다.
- 이를 통해 URL id 값을 가져올 수 있다.

<br>
하여 기본적인 영화 사이트를 완성하였다.<br><br>

**publishing** <br>

git에서 지원하는 gh-pages를 통해 내가 만든 사이트를 배포할 수 있다.<br>
너무 길어서 자세한 과정은 생략한다.<br>
궁금하다면 [해당 강의](https://nomadcoders.co/react-for-beginners/lectures/3293)를 시청하도록<br><br>
[https://jeong011010.github.io/cloneCodingMovieSite](https://jeong011010.github.io/cloneCodingMovieSite)에 들어가면 나의 작품을 볼 수 있을 것이다.

## 예제 실습

<details>
  <summary>🍇 Detail.js 코드</summary>
 
```js
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"

function Detail(){
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  console.log(movie);
  
  useEffect(()=>{
    getMovie();
  },[]);
  return (
    <div>
      {loading ? <h1>Loading...</h1>:
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.large_cover_image} alt={movie.title}/>
          <details>
            <summary>genres</summary>
            <ul>
              {movie.genres.map((g)=>(
              <li key={g}>{g}</li>
              ))}
            </ul>
          </details>
          <details>
            <summary>summary</summary>
            <p>{movie.description_full}</p>
          </details>
          <p>rating : {movie.rating}</p>
          <a href={movie.url}>Movie Link</a>
        </div>
      }
    </div>  
  )
}
export default Detail;
```
</details>

</details>

<details>
  <summary> 🐥 11th commit (23.1.14) </summary>
  
## 참고사항
  
그제 github token 문제로 실패한 publish를 오늘 해결하였다. <br>
```
password for 'https://github.com':
```
라고 나오는데, 뒤에 입력해도 아무 반응이 없길래 replit 문제인줄 알았는데<br>
원래 입력해도 아무 반응이 없고 그냥 붙여넣기 후 enter 입력하면 되는거였다.<br><br>

css 파일을 받아와 적용시켜봤다.<br>
아직 css쪽은 많이 어려운데 공부좀 해서 내 디자인 새로 만들어볼 생각임<br>


## 공부내용

※없음 <br>

## 예제 실습

<details>
  <summary>🍇 Movie.module.css 코드</summary>
 
```css
.movie {
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movie__img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie__title,
.movie__year {
  margin: 0;
  font-weight: 300;
  text-decoration: none;
}

.movie__title a {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
  text-decoration: none;
}

.movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
}

.movie__genres li,
.movie__year {
  margin-right: 10px;
  font-size: 14px;
}
```
</details>

<details>
  <summary>🍇 Home.module.css 코드</summary>
 
```css
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.movies {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
}

@media screen and (max-width: 1090px) {
  .movies {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
```
</details>

<details>
  <summary>🍇 styles.css 코드</summary>
 
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #eff3f7;
  height: 100%;
}
```
</details>

</details>

<!--
<details>
  <summary> 🐥 th commit (23..) </summary>
  
## 참고사항
  
※ <br>

## 공부내용

※ <br>

## 예제 실습

<details>
  <summary>🍇  코드</summary>
 
```js

```
</details>

</details>
-->
