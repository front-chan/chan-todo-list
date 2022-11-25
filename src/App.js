import "./App.css";
import React, { useState } from "react";
import Working from "./components/Working";
import Done from "./components/Done";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "리액트 공부하기", toDo: "리액트 기초", done: true },
    { id: 2, title: "리액트 찍먹", toDo: "리액트 찍먹합시다", done: false },
    { id: 3, title: "텍스트 추가", toDo: "테스트 중입니다", done: false },
    { id: 4, title: "취소버튼 안먹힘", toDo: "테스트", done: true },
  ]);

  const [title, setTitle] = useState();
  const [toDo, setToDo] = useState();

  function addToDoListHandler() {
    const newToDo = {
      id: toDoList.length + 1,
      title: title,
      toDo: toDo,
      done: true,
    };
    setToDoList([...toDoList, newToDo]);
  }

  function deleteToDoListHandler(id) {
    const newToDoList = toDoList.filter((todo) => todo.id !== id);
    setToDoList(newToDoList);
  }

  function changeToDoListHandler(id) {
    // const changeToDoList = toDoList.filter((todo) => todo.done === true);
    // setToDoList(changeToDoList);
    setToDoList(
      toDoList.map((todo) => {
        return todo.id === id ? (todo.done = false) : todo;
        // todo.done === true ? (todo.done = false) : (todo.done = true);
      })
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="title">제목</label>
        <input
          value={title || ""}
          placeholder="제목을 입력해주세요"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="todo">내용</label>
        <input
          value={toDo || ""}
          placeholder="내용을 입력해주세요"
          id="todo"
          onChange={(e) => setToDo(e.target.value)}
        />
        <button onClick={addToDoListHandler}>추가하기</button>
      </header>
      <main>
        <section>
          <h1>Working...🔥</h1>
          {toDoList.map((todo) => {
            return (
              <Working
                todo={todo}
                key={todo.id}
                handleDelete={deleteToDoListHandler}
                handleChange={changeToDoListHandler}
              ></Working>
            );
          })}
        </section>
        <section>
          <h1>Done..!🎉</h1>
          {toDoList.map((todo) => {
            return (
              // {todo.done === false}
              <Done
                todo={todo}
                // done={todo.done === false}
                key={todo.id}
                handleDelete={deleteToDoListHandler}
                handleChange={changeToDoListHandler}
              ></Done>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
