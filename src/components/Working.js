import "../List.css";
import CustomButton from "./CustomButton";

function Working(props) {
  //   console.log(props);
  if (props.todo.done === true) {
    return (
      <div className="working">
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
            onClick={() => {
              props.handleChange(props.todo.done);
              // console.log(props.todo.done);
              props.todo.done = false;
              // console.log(props.todo.done);
            }}
          >
            {props.todo.done === true ? "완료" : "취소"}
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default Working;
