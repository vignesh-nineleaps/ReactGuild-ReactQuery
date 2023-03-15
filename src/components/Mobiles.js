import axios from "axios";
import { useEffect, useState } from "react";

const Mobiles = () => {
  const [mobilesData, setMobilesData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/mobiles")
      .then((res) => {
        setMobilesData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <h1>Mobile Phones</h1>
      {mobilesData?.map((mobile) => (
        <p key={mobile.id}>{mobile?.name}</p>
      ))}
    </>
  );
};

export default Mobiles;
