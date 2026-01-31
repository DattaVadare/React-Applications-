import { useEffect, useState } from "react";

export function Iphone16() {

  const [Product, setProduct] = useState({
    title: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    image: "",
    offers: []
  });

  useEffect(() => {
    var http = new XMLHttpRequest();
    http.open("get", "Product.json", true);
    http.send();
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        setProduct(JSON.parse(http.responseText));
      }
    };
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-3">

        <div className="row">

          {/* IMAGE */}
          <div className="col-md-4 text-center">
            <img
              src={Product.image}
              alt="Iphone 16"
              className="img-fluid rounded"
              style={{ maxHeight: "300px" }}
            />
          </div>

          {/* DETAILS */}
          <div className="col-md-8">

            <h4 className="fw-bold">{Product.title}</h4>

            {/* RATING */}
            <div className="my-2">
              <span className="badge bg-success me-2">
                {Product.rating.rate} ★
              </span>
              <span className="text-muted">
                {Product.rating.count} Ratings
              </span>
            </div>

            {/* PRICE */}
            <h3 className="text-danger fw-bold">
              ₹{Product.price}
            </h3>

            <hr />

            {/* OFFERS */}
            <h6 className="fw-bold">Available Offers</h6>
            <ul className="list-unstyled">
              {
                Product.offers.map((bankOffer, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-tag-fill text-success me-2"></i>
                    {bankOffer}
                  </li>
                ))
              }
            </ul>

            {/* BUTTONS */}
            <div className="mt-3">
              <button className="btn btn-warning me-2 px-4">
                Add to Cart
              </button>
              <button className="btn btn-primary px-4">
                Buy Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
