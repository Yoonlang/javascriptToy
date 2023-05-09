import { Suspense } from "react";
import HiComp from "../src/components/HiComp";
import Loading from "../src/components/Loading";

const Hi = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HiComp />
    </Suspense>
  );
};

export default Hi;
