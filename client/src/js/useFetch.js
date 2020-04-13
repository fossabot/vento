import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(uri) {
  const [data, setData] = useState({});
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var result;
    const fetchData = async () => {
      try {
        result = await axios(uri);
        if (result.status === 200) {
          setData(result.data);
          setLoading(false);
        }
      } catch (e) {
        var error = e.description;
        console.log("Error: " + error);
        setError(error);
      }
    }
    fetchData();
  }, [loading, uri]);
  return { loading, data, error };
}
