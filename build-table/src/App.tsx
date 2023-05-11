import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./components/GlobalStyle";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/web" />} />
          <Route path="/web/*" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
