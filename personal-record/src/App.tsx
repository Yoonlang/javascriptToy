import MainPage from "pages/MainPage";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "pages/SignUpPage";
import Header from "components/Header";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/web" element={<MainPage />} />
          <Route path="/web/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
