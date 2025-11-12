import "./Product.css";
import Price from "./price.jsx";

function Product({ title, idx }) {
  let oldPrices = [100, 200, 300, 400, 500];
  let newPrices = [90, 180, 270, 360, 450];
  let description = [
    "latest model",
    "high performance",
    "great camera",
    "fast charging",
    "durable build",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}

export default Product;
