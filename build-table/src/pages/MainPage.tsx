import React, { useState } from "react";
import Table from "components/Table";
import DropDown from "components/DropDown";
import { viewingDataLayer } from "consts";
import Pagination from "components/Pagination";
import employeeDataList from "datas/index.json";
import CustomHelmet from "components/CustomHelmet";

const MainPage: React.FC = () => {
  const [viewingDataForPage, setViewingDataForPage] = useState<number>(
    viewingDataLayer.five
  );
  const [viewingPage, setViewingPage] = useState<number>(1);

  return (
    <>
      <CustomHelmet page={"main"} />
      <header id="page_title">Grepp Enterprise</header>
      <div className="area" id="dropdown">
        <DropDown
          setViewingDataForPage={setViewingDataForPage}
          resetViewingPage={() => setViewingPage(1)}
        />
      </div>
      <div className="area" id="table">
        <Table
          pageIdx={viewingPage}
          viewingDataForPage={viewingDataForPage}
          employeeDataList={employeeDataList}
        />
      </div>
      <div className="area" id="pagination">
        <Pagination
          viewingPage={viewingPage}
          setViewingPage={setViewingPage}
          dataLength={employeeDataList.length}
          viewingDataForPage={viewingDataForPage}
        />
      </div>
    </>
  );
};

export default MainPage;
