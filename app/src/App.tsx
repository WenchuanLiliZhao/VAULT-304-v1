import {PageLayout} from "./components/PageLayout"
import "./appStyles/_app.scss"
import { AllPosts } from "./pages/AllPosts"


function App() {

  return (
    <div>
      <PageLayout page={AllPosts.Post_1} />

    </div>
  )
}

export default App
