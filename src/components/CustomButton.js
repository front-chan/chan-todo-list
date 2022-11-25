function CustomButton(props) {
  const {
    width,
    margin,
    padding,
    border,
    borderRadius,
    bgColor,
    color,
    onClick,
    children,
    cursor,
  } = props;
  //   console.log(props.children);
  //   if (color) {
  //     return (
  //       <button
  //         style={{
  //           border: border,
  //           borderRadius: borderRadius,
  //           backgroundColor: bgColor,
  //           color: color,
  //         }}
  //         onClick={onClick}
  //       >
  //         {children}
  //       </button>
  //     );
  //   }
  return (
    <button
      style={{
        width: width,
        margin: margin,
        padding: padding,
        border: border,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        color: color,
        cursor: cursor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
