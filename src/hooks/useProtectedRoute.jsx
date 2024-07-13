import { ProtectedRoute } from "../utils/ProtectedRoute";

const useProtectedRoute = (Container) => {
  return () => {
    return (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    );
  };
};
export default useProtectedRoute;
