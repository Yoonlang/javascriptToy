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
  const [loadedPageIdx, setLoadedPageIdx] = useState<number>(0);
  const [postList, setPostList] = useRecoilState<Post[]>(totalPostList);

  const scrollHandler = () => {
    if (loadedPageIdx === pageIdx) {
      const leftScrollableHeight = Math.abs(
        window.scrollY + window.innerHeight - document.body.scrollHeight
      );
      if (leftScrollableHeight <= limitScrollableHeight) {
        setPageIdx(pageIdx + 1);
      }
    }
  };

  const getNewRecords = (newRecordList: Post[], pid: number) => {
    setPostList([...postList, ...newRecordList]);
    setLoadedPageIdx(pid);
  };

  useEffect(() => {
    if (!isDone) window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [pageIdx, isDone, loadedPageIdx]);

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
  getNewRecords: (newRecordList: Post[], pid: number) => void;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewRecords: React.FC<NewRecordsProps> = ({
  getNewRecords,
  setIsDone,
}) => {
  const { list: newPostList, pid } = useRecoilValue(currentPostList);

  useEffect(() => {
    if (newPostList.length === 0) {
      setIsDone(true);
      return;
    }
    getNewRecords(newPostList, pid);
  }, [newPostList, pid]);

  return <></>;
};

export default Records;
