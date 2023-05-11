import Header from "components/Header";
import RecordsRecoil from "components/RecordsRecoil";

const MainPageRecoil = () => {
  return (
    <>
      <Header />
      <main id="page_content">
        <div className="content_title">
          <h1> Great PeoPle </h1>
        </div>
        <div id="cards_container">
          <RecordsRecoil />
        </div>
      </main>
    </>
  );
};

export default MainPageRecoil;
