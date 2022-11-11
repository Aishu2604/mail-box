import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfigured, resData) => {
    setError(null);
    try {
      const res = await axios[requestConfigured.request](
        requestConfigured.url,
        requestConfigured.data ? requestConfigured.data : null,
        { headers: requestConfigured.header }
      );
      console.log(res);
      resData(res);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }, []);

  return [error, sendRequest];
};

export default useHttp;
