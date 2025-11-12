export default function Price({ oldPrices, newPrices }) {
  let oldStyles = {
    textDecoration: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0c367",
    height: "43px",
    borderRadius: "0px 0px 24px 24px",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrices}</span>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <span style={newStyles}>{newPrices}</span>
    </div>
  );
}
