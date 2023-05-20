import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";
import Layout from "./layout/Layout";
import Jobs from "./components/dashboard/Jobs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />}>
              <Route index path="jobs" element={<Jobs />} />
              <Route path="reports" element={<Jobs />} />
              <Route path="manage-coins" element={<Jobs />} />
            </Route>
            <Route path="/post-job" element={<PostJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
