import "../List.css";
import CustomButton from "./CustomButton";

function Done(props) {
  // console.log(props);
  if (props.todo.done === false) {
    return (
      <div className="done">
        <h3 className="title">{props.todo.title}</h3>
        <p className="todo">{props.todo.toDo}</p>
        <div>
          <CustomButton
            width="130px"
            bgColor="transparent"
            border="2px solid red"
            borderRadius="10px"
            margin="10px"
            padding="10px 30px"
            cursor="pointer"
            onClick={() => {
              props.handleDelete(props.todo.id);
            }}
          >
            삭제하기
          </CustomButton>
          <CustomButton
            width="130px"
            bgColor="transparent"
            border="2px solid green"
            borderRadius="10px"
            margin="10px"
            padding="10px 30px"
            cursor="pointer"
            onClick={() => {
              props.handleChange(props.todo.id);
              // console.log(props.todo.done);
              // props.todo.done = true;
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
