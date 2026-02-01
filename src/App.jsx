import { Route, Routes } from "react-router-dom";
import Login from "./feature/auth/page/Login";
import Register from "./feature/auth/page/Register";
import Upload from "./feature/upload/page/Upload";
import ProtectedRoute from "./feature/auth/route/ProtectedRoute";
import Navbar from "./components/ui/Navbar";
import useAuthPersist from "./feature/auth/hooks/useAuthPersist";
import LandingPage from "./page/LandingPage";
import PlatformsContainer from "./feature/platforms/PlatformsContainer";
import Sidebar from "./layout/Sidebar";
import NotFound from "./feature/upload/page/NotFound";
import AboutScore from "./page/AboutScore";
import Footer from "./page/Footer";
import InDevelopment from "./page/InDevelopment";

const App = () => {
  // useAuthPersist();
  return (
    <Routes>
      <Route element={<Footer />}>
        <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="how" element={<AboutScore />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Sidebar />}>
              <Route path="/applications" element={<Upload />} />
              <Route path="/platforms" element={<PlatformsContainer />} />
              <Route path="/dashboard" element={<InDevelopment/>}/>
              <Route path="/savedJobs" element={<InDevelopment/>}/>
              <Route path="/resume" element={<InDevelopment/>}/>
              <Route path="profile" element={<InDevelopment/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
