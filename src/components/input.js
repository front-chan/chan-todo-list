import CustomButton from "./CustomButton";

function Form(props) {
  console.log(props);
  return (
    <form className="App-header" onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          className="input-text"
          value={props.title || ""}
          placeholder="제목을 입력해주세요"
          id="title"
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <label htmlFor="todo">내용</label>
        <input
          className="input-text"
          value={props.toDo || ""}
          placeholder="내용을 입력해주세요"
          id="todo"
          onChange={(e) => props.setToDo(e.target.value)}
        />
      </div>
      <div>
        <CustomButton
          width="130px"
          bgColor="rgb(1, 87, 65)"
          color="white"
          border="0"
          borderRadius="10px"
          margin="10px"
          padding="10px 30px"
          cursor="pointer"
          onClick={props.addToDoListHandler}
        >
          추가하기
        </CustomButton>
      </div>
    </form>
  );
}

export default Form;
