import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollComponent from "./components/ScrollComponent";


export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollComponent />
      <Footer />
    </>
  );
}
