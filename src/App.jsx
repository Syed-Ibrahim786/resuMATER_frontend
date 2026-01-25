import { Route, Routes } from "react-router-dom";
import Login from "./feature/auth/page/Login";
import Register from "./feature/auth/page/Register";
import Upload from "./feature/upload/page/Upload";
import ProtectedRoute from "./feature/auth/route/ProtectedRoute";
import Navbar from "./components/ui/Navbar";
import useAuthPersist from "./feature/auth/hooks/useAuthPersist";
import LandingPage from "./page/LandingPage";
import PlatformsContainer from "./feature/platforms/PlatformsContainer";

const App = () => {
  // useAuthPersist();
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<LandingPage/>} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/mainPage" element={<Upload />} />
        <Route path="/platforms" element={<PlatformsContainer/>}/>
      </Route>
      </Route>
    </Routes>
  );
};

export default App;
