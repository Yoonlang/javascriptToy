import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const Hi = () => {
  const [data, setData] = useState();
  const [err, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/hello?id=300");
      const apiData = await res.json();
      setData(apiData.name);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? <>loading...</> : <>{data ? data : err}</>}
    </div>
  );
};

export default Hi;
