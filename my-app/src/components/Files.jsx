import { useEffect, useState } from "react";

const Files = ({ id }) => {
  const [files, setFiles] = useState();

  const getFiles = async () => {
    const res = await fetch(`http://localhost:3000/api/getFiles?id=${id}`);
    const apiData = await res.json();
    setTimeout(() => {
      setFiles(apiData);
    }, 2000);
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      {files?.map((file, index) => {
        return <p key={index}>{file}</p>;
      })}
    </>
  );
};

export default Files;
