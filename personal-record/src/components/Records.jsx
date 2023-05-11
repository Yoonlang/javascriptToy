import { throttle } from "functions/throttle";
import { useMount } from "functions/useMount";
import { useEffect, useState } from "react";
import Card from "components/Card";

const Records = () => {
  const [pageIdx, setPageIdx] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState([]);

  const throttledScrollHandler = throttle(() => {
    if (
      !isLoading &&
      Math.abs(
        window.scrollY - document.body.scrollHeight + window.innerHeight
      ) <= 30
    ) {
      setIsLoading(true);
      getPostData(pageIdx + 1);
      setPageIdx(pageIdx + 1);
    }
  });

  const getPostData = async (pid) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pid}`
    );
    const data = await res.json();
    setPostList([...postList, ...data]);
    setIsLoading(false);
  };

  useMount(() => {
    setIsLoading(true);
    getPostData(pageIdx);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [pageIdx, postList]);

  return (
    <>
      {postList?.map((info, idx) => {
        return <Card key={info.id} info={{ ...info, idx }} />;
      })}
    </>
  );
};

export default Records;
