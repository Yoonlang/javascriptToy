import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { userList } from "store";

const Records = () => {
  const userlist = useRecoilValue(userList);

  return (
    <>
      {userlist?.map((info) => {
        const { id, email, name, username } = info;
        return <Fragment key={id}></Fragment>;
      })}
    </>
  );
};

export default Records;
