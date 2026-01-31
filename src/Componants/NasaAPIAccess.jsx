import axios from "axios";
import { useEffect, useState } from "react";

export function NasaData() {

  const [planetary, setPlanetary] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=EqPPgQeQbgHTMBpsX9t46Y6WV0cNr1nBQqkIoeeM")
      .then((response) => {
        setPlanetary(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load NASA data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }




  if (error) {
    return <h4 className="text-danger text-center mt-5">{error}</h4>;
  }

  return (
    <div className="container mt-4">
      <div className="row align-items-center">

        <div className="col-md-8 text-center">
          {planetary.media_type === "image" ? (
            <img
              src={planetary.url}
              alt={planetary.title}
              className="img-fluid rounded shadow"
            />
          ) : (
            <iframe
              title="nasa-video"
              src={planetary.url}
              className="w-100"
              height="400"
            />
          )}
        </div>

        <div className="col-md-4">
          <h4>{planetary.title}</h4>
          <p className="text-muted">{planetary.date}</p>
          <p>{planetary.explanation}</p>
        </div>

      </div>
    </div>
  );
}
