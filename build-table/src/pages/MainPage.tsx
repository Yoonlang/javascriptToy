import React from "react";
import Table from "components/Table";

const MainPage: React.FC = () => {
  return (
    <>
      <header id="page_title">Grepp Enterprise</header>
      <div className="area" id="dropdown">
        드롭다운을 이 영역에 구현해주세요
      </div>
      <div className="area" id="table">
        <Table pageIdx={1} />
      </div>
      <div className="area" id="pagination">
        <button className="arrow"></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button className="arrow"></button>
      </div>
    </>
  );
};

export default MainPage;
