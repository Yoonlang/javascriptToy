import MainPage from "pages/MainPage";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "pages/SignUpPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/web" element={<MainPage />} />
          <Route path="/web/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
