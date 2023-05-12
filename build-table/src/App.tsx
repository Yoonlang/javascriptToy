import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/web"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/web",
    element: <MainPage />,
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
