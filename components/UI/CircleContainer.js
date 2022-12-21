const CircleContainer = (props) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        background: "dodgerblue",
      }}
    >
      {props.children}
    </div>
  );
};

export default CircleContainer;
