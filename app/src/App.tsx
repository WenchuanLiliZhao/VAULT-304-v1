import { PageLayout } from "./codes/components/PageLayout";
import "./codes/appStyles/_app.scss";
import { AllPosts } from "./docs/AllPosts";
import { ScrollToTop } from "./codes/functions/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Routes>
          <Route index element={<PageLayout page={AllPosts.Post_1} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
