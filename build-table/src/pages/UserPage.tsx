import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import employeeDataList from "datas/index.json";

const UserPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    title: "",
    email: "",
    role: "",
  });
  const { state, pathname } = useLocation();
  const { name, title, email, role } = userInfo;

  useEffect(() => {
    if (state) {
      setUserInfo(state);
    } else {
      const id = pathname.split("/").pop();
      setUserInfo(employeeDataList.find((data) => data.id === Number(id)));
    }
  }, [state, pathname]);

  return (
    <>
      <p>name : {name}</p>
      <p>title : {title}</p>
      <p>email : {email}</p>
      <p>role : {role}</p>
    </>
  );
};

export default UserPage;
