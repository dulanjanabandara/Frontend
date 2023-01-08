import "./productrow.css";

function Productrow({ product }) {
  const { name, calories, fat, carbs, protein } = product;

  return (
    <div className="product-row">
      <div className="product-row-name">{name}</div>
      <div className="product-row-calories">{calories}</div>
      <div className="product-row-fat">{fat}</div>
      <div className="product-row-carbs">{carbs}</div>
      <div className="product-row-protein">{protein}</div>
    </div>
  );
}

export default Productrow;
