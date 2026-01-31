import { useState } from "react";

export function ProductCom() {
  const [Product, setProduct] = useState({
    Name: "Tv",
    Price: 25000,
    City: "Select city",
    Stock: false
  });

  const [UpdateProduct, setUpdateProduct] = useState({
    Name: "",
    Price: 0,
    City: "Select city",
    Stock: false
  });

  function handalNameChange(e) {
    setProduct({ ...Product, Name: e.target.value });
  }

  function handalPriceChange(e) {
    setProduct({ ...Product, Price: Number(e.target.value) });
  }

  function handalCityChange(e) {
    setProduct({ ...Product, City: e.target.value });
  }

  function handelSockChange(e) {
    setProduct({ ...Product, Stock: e.target.checked });
  }

  function updateProduct() {
    setUpdateProduct(Product);
  }

  return (
    <div className="container mt-4 p-4 shadow rounded bg-light">
      <h3 className="text-center mb-4">Add Product Details</h3>

      {/* Product Name */}
      <div className="mb-3">
        <label className="form-label fw-bold">Product Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handalNameChange}
          value={Product.Name}
        />
      </div>

      {/* Product Price */}
      <div className="mb-3">
        <label className="form-label fw-bold">Product Price</label>
        <input
          type="number"
          className="form-control"
          onChange={handalPriceChange}
          value={Product.Price}
        />
      </div>

      {/* Product City */}
      <div className="mb-3">
        <label className="form-label fw-bold">Product Available City</label>
        <select
          className="form-select"
          onChange={handalCityChange}
          value={Product.City}
        >
          <option>Select City</option>
          <option>Solapur</option>
          <option>Hyd</option>
          <option>Pune</option>
        </select>
      </div>

      {/* Stock */}
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="stockCheck"
          onChange={handelSockChange}
          checked={Product.Stock}
        />
        <label className="form-check-label fw-bold" htmlFor="stockCheck">
          Available Stock
        </label>
      </div>

      <button className="btn btn-primary w-100 mb-4" onClick={updateProduct}>
        Update
      </button>

      {/* Updated Product Display */}
      <div className="p-3 border rounded bg-white">
        <h5 className="text-center mb-3">Updated Product Info</h5>

        <p><strong>Product Name:</strong> {UpdateProduct.Name}</p>
        <p><strong>Product Price:</strong> ₹{UpdateProduct.Price}</p>
        <p><strong>City:</strong> {UpdateProduct.City}</p>
        <p>
          <strong>Stock:</strong>{" "}
          {UpdateProduct.Stock ? "Product Available" : "Product Not Available"}
        </p>
      </div>
    </div>
  );
}
