import { useState, useEffect } from 'react';
function useDataFetch(link) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(link);
          const jsonData = await response.json();
          setData(jsonData.title);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [link]);
  
    return { data, error, loading };
  }
  export default useDataFetch;
  