import CustomButton from "./CustomButton";

function Done(props) {
  // console.log(props);
  if (props.todo.done === false) {
    return (
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.toDo}</p>
        <div>
          <CustomButton
            onClick={() => {
              props.handleDelete(props.todo.id);
            }}
          >
            삭제하기
          </CustomButton>
          <CustomButton
            onClick={() => {
              props.handleChange(props.todo.done);
              // console.log(props.todo.done);
              props.todo.done = true;
              // console.log(props.todo.done);
            }}
          >
            {props.todo.done === false ? "취소" : "완료"}
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default Done;
