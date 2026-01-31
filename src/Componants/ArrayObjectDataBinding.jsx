export function ProductObject() {

  var Product = {
    name: "Laptop",
    price: 50000.23,
    Ram: "16 GB",
    Branshs: ["Solapur", "Hyd", "Benglore"]
  }
  return (
    <>
      <h1>Product Details</h1>
      <dl>
        <dt>Name</dt>
        <dd>{Product.name}</dd>
        <dt>Price</dt>
        <dd>{Product.price}</dd>
        <dt>Ram</dt>
        <dd>{Product.Ram}</dd>
        <dt>Branshs</dt>
        <dd>
          <ul>
            {
              Product.Branshs.map(barnch => (
                <li key={barnch}>{barnch}</li>
              ))

            }
          </ul>
        </dd>
      </dl>
    </>
  )
}