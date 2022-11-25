function CustomButton(props) {
  const { color, onClick, children } = props;
  //   console.log(props.children);
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
