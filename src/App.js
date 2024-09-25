import Layout from "./layout";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Blog from "./pages/Blog/blog-page";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
