import { Layout } from "./codes/components/layout/BasicLayout";
import "./codes/appStyles/_app.scss";
import { ScrollToTop } from "./codes/functions/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router";
import { Channels } from "./docs/Channels";
import { Page } from "./docs/_types/PageShapes";
import { Posts } from "./docs/Posts";

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Routes>
          <Route index element={<Layout page={Channels.Overview} />} />

          {Object.values(Channels).map((channel: Page, i: number) => (
            <Route
              key={i}
              path={`/${channel.info.slug}`}
              element={<Layout page={channel} />}
            />
          ))}

          {Object.values(Posts).map((channel: Page, i: number) => (
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
