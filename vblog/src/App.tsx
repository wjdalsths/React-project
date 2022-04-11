import { GlobalStyle } from "./style/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
import NoticePage from "./Page/NoticPage";
import MultipleImageUploadComponent from "./component/MultipleImageUploadComponent";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/notice" element={<NoticePage />} />
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
