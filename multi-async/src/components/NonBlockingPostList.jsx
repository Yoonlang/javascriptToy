import { useEffect } from "react";

const NonBlockingPostList = () => {
  useEffect(() => {
    const getPostList1 = () => {
      const startTime = performance.now();
      let count = 0;
      for (let i = 1; i <= 10; i++) {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${i}`).then(
          (data) => data.json().then((res) => count++)
        );
      }

      const counter = setInterval(() => {
        if (count === 10) {
          clearInterval(counter);
          const endTime = performance.now();
          console.log("논블로킹", endTime - startTime);
        }
      }, 30);
    };

    const getPostListWithPromiseAll = async () => {
      const startTime = performance.now();
      const promiseAllArray = [];
      for (let i = 1; i <= 10; i++) {
        promiseAllArray.push(
          fetch(`https://jsonplaceholder.typicode.com/posts?_page=${i}`)
        );
      }
      const responses = await Promise.all(promiseAllArray);
      responses.forEach((data) => {
        data.json();
      });
      const endTime = performance.now();
      console.log("논블로킹 PromiseAll", endTime - startTime);
    };

    getPostList1();
    getPostListWithPromiseAll();
  }, []);

  return <></>;
};

export default NonBlockingPostList;
