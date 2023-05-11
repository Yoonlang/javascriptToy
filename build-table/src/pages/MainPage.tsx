import React from "react";
import Table from "components/Table";
import DropDown from "components/DropDown";

const MainPage: React.FC = () => {
  return (
    <>
      <header id="page_title">Grepp Enterprise</header>
      <div className="area" id="dropdown">
        <DropDown />
      </div>
      <div className="area" id="table">
        <Table pageIdx={1} />
      </div>
      <div className="area" id="pagination">
        <button className="arrow">&lt;&lt;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button className="arrow">&gt;&gt;</button>
      </div>
    </>
  );
};

export default MainPage;
