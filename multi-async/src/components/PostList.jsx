import { useEffect } from "react";

const PostList = () => {
  useEffect(() => {
    const getPostList1 = async () => {
      const startTime = performance.now();
      for (let i = 1; i <= 10; i++) {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${i}`
        );
        const res = await data.json();
        console.log("A", res);
      }
      const endTime = performance.now();
      console.log(endTime - startTime);
    };

    const getPostList2 = async () => {
      const startTime = performance.now();
      for (let i = 1; i <= 10; i++) {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${i}`
        );
        const res = await data.json();
        console.log("B", res);
      }
      const endTime = performance.now();
      console.log(endTime - startTime);
    };

    getPostList1();
    getPostList2();
  }, []);

  return <></>;
};

export default PostList;
