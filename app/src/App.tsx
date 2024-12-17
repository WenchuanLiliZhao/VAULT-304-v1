import { Layout } from "./codes/components/layout/BasicLayout";
import "./codes/appStyles/_app.scss";
import { ScrollToTop } from "./codes/functions/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router";
import { Channels } from "./docs/Channels";
import { Page } from "./docs/_types/PageShapes";

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
              path={`/${channel.info.id}`}
              element={<Layout page={channel} />}
            />
          ))}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
