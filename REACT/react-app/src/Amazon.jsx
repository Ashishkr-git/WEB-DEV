import Product from "./Product.jsx";

function AmazonTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  };
  return (
    <div className="ProductTab" style={styles}>
      
      <Product title={"Iphone 14 pro max"} idx={0} />
      <Product title={"Samsung Galaxy S21"} idx={1} />
      <Product title={"Google Pixel 6"} idx={2} />
      <Product title={"OnePlus 9 Pro"} idx={3} />
      <Product title={"Sony Xperia 1 III"} idx={4} />
    </div>
  );
}

export default AmazonTab;
