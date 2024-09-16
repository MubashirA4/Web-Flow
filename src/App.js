import Layout from "./layout";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
