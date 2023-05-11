import { throttle } from "functions/throttle";
import { Suspense, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalPostList, pageId, currentPostList } from "store";
import Card from "components/Card";

export interface Post {
  id: number;
  title: string;
  body: string;
}

const limitScrollableHeight = 30;

const Records: React.FC = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [pageIdx, setPageIdx] = useRecoilState<number>(pageId);
  const [postList, setPostList] = useRecoilState<Post[]>(totalPostList);

  const throttledScrollHandler = throttle(() => {
    const leftScrollableHeight = Math.abs(
      window.scrollY + window.innerHeight - document.body.scrollHeight
    );
    if (leftScrollableHeight <= limitScrollableHeight) {
      setPageIdx(pageIdx + 1);
    }
  });

  const getNewRecords = (newRecordList: Post[]) => {
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
      {postList?.map((info) => {
        return <Card key={info.id} info={info} />;
      })}
      <Suspense fallback={<p>loading New Records...</p>}>
        <NewRecords getNewRecords={getNewRecords} setIsDone={setIsDone} />
      </Suspense>
    </>
  );
};

interface NewRecordsProps {
  getNewRecords: (newRecordList: Post[]) => void;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewRecords: React.FC<NewRecordsProps> = ({
  getNewRecords,
  setIsDone,
}) => {
  const newPostList = useRecoilValue<Post[]>(currentPostList);

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
