import Home from "./pages/home/Home";
import TopBar from "./component/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";

function App() {
  const{user}=useContext(Context);

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={ <Write /> } />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/post/:postId" element=<Single /> />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
