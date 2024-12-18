import { Layout } from "./codes/components/layout/BasicLayout";
import "./codes/appStyles/_app.scss";
import { ScrollToTop } from "./codes/functions/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router";
import { AllChannels } from "./docs/AllChannels";
import { Page } from "./docs/_types/PageShapes";
import { AllPosts } from "./docs/AllPosts";
import { TagPage } from "./docs/_types/TagPage";
import { TAG_ROUTE_PARAMS, TAG_ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Routes>
          <Route index element={<Layout page={AllChannels.Overview} />} />

          {Object.values(AllChannels).map((channel: Page, i: number) => (
            <Route
              key={i}
              path={`/${channel.info.slug}`}
              element={<Layout page={channel} />}
            />
          ))}

          <Route path={`${TAG_ROUTES.TAGS_BASE}/:${TAG_ROUTE_PARAMS.TAG_NAME}`} element={<TagPage />} />

          {Object.values(AllPosts).map((channel: Page, i: number) => (
            <Route
              key={i}
              path={`/${channel.info.slug}`}
              element={<Layout page={channel} />}
            />
          ))}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
