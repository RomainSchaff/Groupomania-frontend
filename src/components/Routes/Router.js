import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Header from "./Header";
import Footer from "./Footer";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="Groupomania-frontend/" element={<Home />} />
        <Route path="Groupomania-frontend/Profile" element={<Profile />} />
        <Route path="Groupomania-frontend/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
