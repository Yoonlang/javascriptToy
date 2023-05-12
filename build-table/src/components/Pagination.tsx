interface PaginationProps {
  viewingPage: number;
  setViewingPage: React.Dispatch<React.SetStateAction<number>>;
  dataLength: number;
  viewingDataForPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  viewingPage,
  setViewingPage,
  dataLength,
  viewingDataForPage,
}) => {
  const totalPage = Math.ceil(dataLength / viewingDataForPage);

  return (
    <>
      <button className="arrow" onClick={() => setViewingPage(1)}>
        &lt;&lt;
      </button>
      {Array.from({ length: totalPage }, (_, idx) => {
        return (
          <button
            key={idx}
            className={idx + 1 === viewingPage ? "here" : ""}
            onClick={() => setViewingPage(idx + 1)}
          >
            {idx + 1}
          </button>
        );
      })}
      <button className="arrow" onClick={() => setViewingPage(totalPage)}>
        &gt;&gt;
      </button>
    </>
  );
};

export default Pagination;
