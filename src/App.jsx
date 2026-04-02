import Layout from "./layouts/MainLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import { SingleBlog } from "./pages/SingleBlog";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App selection:bg-fintech-yellow selection:text-fintech-900">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/single_blog" element={<SingleBlog />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
