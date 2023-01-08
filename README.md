# 💻 React 를 사용하여 영화사이트 클론코딩
([nomadcoders - ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lectures)) 를 수강중

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

</detalis>

<details>
  <summary> 🐥 5th commit (23.1.8) </summary>
  
## 참고사항
  
<br>

## 공부내용

**useEffect** <br>
- useEffect: 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
<br>
기본 형태
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
