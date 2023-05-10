import Header from "components/Header";
import { Suspense } from "react";
import Records from "../components/Records";

const MainPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<>loading..</>}>
        <Records />
      </Suspense>
    </>
  );
};

export default MainPage;
