import { Suspense } from "react";
import Loading from "../components/core/Loading";

const useSuspense = (Container) => {
  return () => {
    return (
      <Suspense fallback={<Loading isLoading={true} />}>
        <Container />
      </Suspense>
    );
  };
};
export default useSuspense;
