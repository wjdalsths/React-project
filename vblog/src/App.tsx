import { GlobalStyle } from "./style/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
import WritePage from "./Page/WritePage";
import ProfilePage from "./Page/ProfilePage";
import MultipleImageUploadComponent from "./component/MultipleImageUploadComponent";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      {/* <MultipleImageUploadComponent
        images={undefined}
        setImages={undefined}
      ></MultipleImageUploadComponent> */}
    </>
  );
}

export default App;
