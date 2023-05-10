import { Fragment, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { currentPostList } from "store";
import Card from "./Card";

const Records = () => {
  const postList = useRecoilValue(currentPostList);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(window.scrollY);
  //     console.log(document.body.scrollHeight - window.innerHeight);
  //   }, 16);
  // }, []);

  return (
    <>
      {postList?.map((info, idx) => {
        return <Card key={info.id} info={{ ...info, idx }} />;
      })}
    </>
  );
};

export default Records;
