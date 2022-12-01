import "./App.css";
import React, { useState } from "react";
import Working from "./components/Working";
import Done from "./components/Done";
import Form from "./components/input";

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

  function onSubmit(e) {
    e.preventDefault();
    if (title === "" && toDo === "") {
      return;
    }
    setTitle("");
    setToDo("");
  }

  return (
    <div className="App">
      <Form
        title={title}
        toDo={toDo}
        addToDoListHandler={addToDoListHandler}
        onSubmit={onSubmit}
        setTitle={setTitle}
        setToDo={setToDo}
      ></Form>
      <main className="list-section">
        <section>
          <h1>Working...🔥</h1>
          <div className="working-section">
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
          </div>
        </section>
        <section>
          <h1>Done..!🎉</h1>
          <div className="done-section">
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
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
