import { BrowserRouter, Route, Routes } from "react-router";
import "remixicon/fonts/remixicon.css";
import MainLayout from "./Components/MainLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyFiles from "./Components/MyFiles/MyFiles";
import Settings from "./Components/Settings/Settings";
import History from "./Components/History/History";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-files" element={<MyFiles />} />
          <Route path="history" element={<History />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
