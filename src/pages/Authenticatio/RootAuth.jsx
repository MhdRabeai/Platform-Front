import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import { Loading } from "../../components/Loading";
import AuthNavbar from "../../components/AuthNavbar";

const AuthRoot = () => {
  return (
    <div className="auth flex flex-col justify-between min-h-screen ">
      <AuthNavbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default AuthRoot;
