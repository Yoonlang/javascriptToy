import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import Files from "./Files";

const HiComp = () => {
  const [data, setData] = useState();
  const [err, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/hello?id=300");
      const apiData = await res.json();
      setTimeout(() => {
        setData(apiData.name);
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setError(err.message);
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <div className={styles.container}>loading...</div>;
  return (
    <div className={styles.container}>
      {data ? (
        <>
          <>{data}</> <Files id={300} />
        </>
      ) : (
        err
      )}
    </div>
  );
};

export default HiComp;
