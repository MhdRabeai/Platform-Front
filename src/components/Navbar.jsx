/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
// import { useUserInfo } from "../Services/UserContext";

import { MdLogout } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import { useUserInfo } from "../services/UserContext";
const Navbar = () => {
  const items = [
    {
      label: <Link to={"/login"}>Login</Link>,
      key: "0",
    },

    {
      type: "divider",
    },
    {
      label: <Link to={"/register"}>Register</Link>,
      key: "1",
    },
  ];
  const navigate = useNavigate();
  const { logoutUser, user } = useUserInfo();
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        await logoutUser();
        navigate("/");
        return toast.success("Logout successful", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      navigate("/");
      return toast.error(err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  // const [isDark, setIsDark] = useState(false);
  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <header className="rounded-b-3xl flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#4f9451] text-sm py-2 shadow-2xl mb-10 dark:drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)]">
      <nav className="max-w-[86rem] w-full mx-auto px-4 sm:flex items-center sm:justify-between ">
        <div className="flex justify-between items-center md:flex-none">
          <NavLink
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            to="/"
          >
            <img src="/logo.png" alt="logo" width={135} />
          </NavLink>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-white/20 font-medium bg-[#4aa34d] text-white shadow-sm align-middle hover:bg-white/10 focus:outline-none focus:bg-white/10 text-sm"
              id="hs-navbar-primary-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-primary"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-primary"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-primary"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-primary-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 sm-pb-4 md-pb-0">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="/"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="/team"
            >
              Team
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="/contact"
            >
              Contact
            </NavLink>

            {/* <button onClick={toggleTheme} className="transition  p-1 sm:pr-2">
              {isDark ? (
                <MdDarkMode className="fill-white scale-150 transition" />
              ) : (
                <GoSun className="fill-white scale-150 transition" />
              )}
            </button> */}

            {user !== null ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "active font-medium text-white focus:outline-none"
                      : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <button
                  className="font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition scale-125"
                  onClick={handleLogout}
                >
                  <MdLogout />
                </button>
              </>
            ) : (
              <Dropdown menu={{ items }} trigger={["click"]}>
                <button
                  id="hs-dropdown-custom-icon-trigger"
                  type="button"
                  className=" flex justify-center items-center size-9 rounded-lg border-2 border-white/20 font-medium bg-[#4f9451] text-white shadow-sm align-middle hover:bg-white/10 focus:outline-none  text-sm"
                >
                  <svg
                    className="flex-none size-4 text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </Dropdown>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
