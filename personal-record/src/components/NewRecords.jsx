import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { currentPostList } from "store";

const NewRecords = ({ getNewRecords }) => {
  const newPostList = useRecoilValue(currentPostList);

  useEffect(() => {
    getNewRecords(newPostList);
  }, [newPostList]);

  return <></>;
};

export default NewRecords;
