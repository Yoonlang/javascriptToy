import { throttle } from "functions/throttle";
import { Suspense, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalPostList, pageId, currentPostList } from "store";
import Card from "components/Card";

const limitScrollableHeight = 30;

const Records = () => {
  const [isDone, setIsDone] = useState(false);
  const [pageIdx, setPageIdx] = useRecoilState(pageId);
  const [postList, setPostList] = useRecoilState(totalPostList);

  const throttledScrollHandler = throttle(() => {
    const leftScrollableHeight = Math.abs(
      window.scrollY + window.innerHeight - document.body.scrollHeight
    );
    if (leftScrollableHeight <= limitScrollableHeight) {
      setPageIdx(pageIdx + 1);
    }
  });

  const getNewRecords = (newRecordList) => {
    setPostList([...postList, ...newRecordList]);
  };

  useEffect(() => {
    if (!isDone) window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [pageIdx, isDone]);

  return (
    <>
      {postList?.map((info, idx) => {
        return <Card key={info.id} info={{ ...info, idx }} />;
      })}
      <Suspense fallback={<p>loading New Records...</p>}>
        <NewRecords getNewRecords={getNewRecords} setIsDone={setIsDone} />
      </Suspense>
    </>
  );
};

const NewRecords = ({ getNewRecords, setIsDone }) => {
  const newPostList = useRecoilValue(currentPostList);

  useEffect(() => {
    if (newPostList.length === 0) {
      setIsDone(true);
      return;
    }
    getNewRecords(newPostList);
  }, [newPostList]);

  return <></>;
};

export default Records;
