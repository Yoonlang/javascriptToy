import { useEffect } from "react";

const BlockingPostList = () => {
  useEffect(() => {
    const getPostList1 = async () => {
      const startTime = performance.now();
      for (let i = 1; i <= 10; i++) {
        const data = await new Promise((resolve) =>
          setTimeout(() => {
            resolve("A");
          }, 100)
        );
        // const res = await data.json();
        // console.log("A", res);
      }
      const endTime = performance.now();
      console.log("블로킹1", endTime - startTime);
    };

    const getPostList2 = async () => {
      const startTime = performance.now();
      for (let i = 1; i <= 10; i++) {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${i}`
        );
        const res = await data.json();
        // console.log("B", res);
      }
      const endTime = performance.now();
      console.log("블로킹2", endTime - startTime);
    };

    getPostList1();
    getPostList2();
  }, []);

  return <></>;
};

export default BlockingPostList;
