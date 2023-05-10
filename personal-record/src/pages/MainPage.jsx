import Header from "components/Header";
import { Suspense } from "react";
import Records from "../components/Records";

const MainPage = () => {
  return (
    <>
      <Header />
      <main id="page_content">
        <div className="content_title">
          <h1> Great PeoPle </h1>
        </div>
        <div id="cards_container">
          <Suspense fallback={<>loading...</>}>
            <Records />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default MainPage;
