import { useEffect, useState } from "react";

export function MultipleProduct() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Multiple.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">

      {
        products.map(product => (
          <div key={product.id} className="card shadow-sm mb-4 p-3">

            <div className="row">

              <div className="col-md-4 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: "250px" }}
                />
              </div>

              <div className="col-md-8">

                <h4 className="fw-bold">{product.title}</h4>

                <span className="badge bg-success me-2">
                  {product.rating.rate} ★
                </span>
                <span className="text-muted">
                  {product.rating.count} Ratings
                </span>

                <h3 className="text-danger mt-2">
                  ₹{product.price}
                </h3>

                <h6 className="fw-bold mt-3">Available Offers</h6>
                <ul className="list-unstyled">
                  {
                    product.offers.map((offer, index) => (
                      <li key={index} className="mb-1">
                        <i className="bi bi-tag-fill text-success me-2"></i>
                        {offer}
                      </li>
                    ))
                  }
                </ul>

              </div>

            </div>

          </div>
        ))
      }

    </div>
  );
}
