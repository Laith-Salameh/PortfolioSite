import { useEffect, useState } from "react";

export type UseFetch<T> = {
  loading: boolean
  data?: T 
  error?: boolean
}

function useFetch<T>(url: string) : UseFetch<T> {
  const [data, setData] = useState< T| undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res)=>{return res.json()})
      .then((json) => {
        setData(json);
        console.log(json)
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [url]);

  return { data, loading, error };
}

export default useFetch;