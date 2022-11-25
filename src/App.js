import "./App.css";
import React, { useState } from "react";

function Working(props) {
  // console.log(props);
  if (props.todo.done === true) {
    return (
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.toDo}</p>
        <div>
          <button
            onClick={() => {
              props.handleDelete(props.todo.id);
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              props.handleChange(props.todo.done);
              // console.log(props.todo.done);
              props.todo.done = false;
              // console.log(props.todo.done);
            }}
          >
            {props.todo.done === true ? "완료" : "취소"}
          </button>
        </div>
      </div>
    );
  }
}

function Done(props) {
  // console.log(props);
  if (props.todo.done === false) {
    return (
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.toDo}</p>
        <div>
          <button
            onClick={() => {
              props.handleDelete(props.todo.id);
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              props.handleChange(props.todo.done);
              // console.log(props.todo.done);
              props.todo.done = true;
              // console.log(props.todo.done);
            }}
          >
            {props.todo.done === false ? "취소" : "완료"}
          </button>
        </div>
      </div>
    );
  }
}

function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      toDo: "리액트 기초를 공부해봅시다.",
      done: true,
    },
    { id: 2, title: "리액트 찍먹", toDo: "리액트 찍먹합시다", done: false },
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

  function changeToDoListHandler() {
    const changeToDoList = toDoList.filter((todo) => todo.done === true);
    setToDoList(changeToDoList);
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
          <h1>Working...</h1>
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
          <h1>Done..!</h1>
          {toDoList.map((todo) => {
            return (
              <Done
                todo={todo}
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
