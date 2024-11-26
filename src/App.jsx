import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/mainPages/Home";
import About from "./pages/mainPages/About";
import Blogs from "./pages/mainPages/Blogs";
import BlogDetail from "./pages/mainPages/BlogDetail";
import Contact from "./pages/mainPages/Contact";
import Team from "./pages/mainPages/Team";
import DoctorPage from "./pages/mainPages/DoctorPage";
import Appointment from "./pages/mainPages/Appointment";
import NotFound from "./components/NotFound";
import Root from "./pages/Root";
import "./app.css";
import AuthRoot from "./pages/Authenticatio/RootAuth";
import Login from "./pages/Authenticatio/Login";
import Register from "./pages/Authenticatio/Register";
import Room from "./pages/VideoRoom/Room";
import MainRoom from "./pages/VideoRoom/MainRoom";
function App() {
  return (
    <div className="">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        rtl={false}
        draggable
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="room" element={<MainRoom />} />
          <Route path="room/:roomId" element={<Room />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/blog" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:doctorId" element={<DoctorPage />} />
          <Route path="team/:doctorId/booking" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthRoot />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
