import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { userList } from "store";
import Card from "./Card";

const Records = () => {
  const userlist = useRecoilValue(userList);

  return (
    <>
      {userlist?.map((info, idx) => {
        return <Card key={info.id} info={{ ...info, idx }} />;
      })}
    </>
  );
};

export default Records;
