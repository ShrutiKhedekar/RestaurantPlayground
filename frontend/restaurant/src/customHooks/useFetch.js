import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const abortCont = new AbortController();

  useEffect(() => {
    console.log(url);
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) throw error("something went wrong!");
        return res.json();
      })
      .then((data) => {
        if (!url.includes("restaurantSearch"))
          setData((prevData) => [...prevData, ...data.data]);
        else {
          setData(data.data);
        }
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
