import "./searchbar.css";

function Searchbar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        name="search"
        value=""
        placeholder="Search for products"
      />
      <button type="button">Search</button>
    </div>
  );
}

export default Searchbar;
