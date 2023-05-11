import { throttle } from "functions/throttle";
import { Suspense, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalPostList, pageId, currentPostList } from "store";
import Card from "components/Card";

const RecordsRecoil = () => {
  const [pageIdx, setPageIdx] = useRecoilState(pageId);
  const [postList, setPostList] = useRecoilState(totalPostList);

  const throttledScrollHandler = throttle(() => {
    if (
      Math.abs(
        window.scrollY - document.body.scrollHeight + window.innerHeight
      ) <= 30
    ) {
      setPageIdx(pageIdx + 1);
    }
  });

  const getNewRecords = (newRecordList) => {
    setPostList([...postList, ...newRecordList]);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [pageIdx]);

  return (
    <>
      {postList?.map((info, idx) => {
        return <Card key={info.id} info={{ ...info, idx }} />;
      })}
      <Suspense fallback={<p>loading New Records...</p>}>
        <NewRecords getNewRecords={getNewRecords} />
      </Suspense>
    </>
  );
};

const NewRecords = ({ getNewRecords }) => {
  const newPostList = useRecoilValue(currentPostList);

  useEffect(() => {
    getNewRecords(newPostList);
  }, [newPostList]);

  return <></>;
};

export default RecordsRecoil;
