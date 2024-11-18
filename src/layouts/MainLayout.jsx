import { Outlet } from "react-router-dom";
import NavbarLogin from "./../Components/Uitily/NavBarLogin";
import Footer from "./../Components/Uitily/Footer";
import { useEffect, useState } from "react";
import Loading from "../Pages/loading/Loading";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the site has been loaded before
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");

    if (!hasLoadedBefore) {
      // If it hasn't loaded before, show loading
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoadedBefore", "true"); // Set the flag in localStorage
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      // If it has loaded before, skip the loading
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavbarLogin />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
