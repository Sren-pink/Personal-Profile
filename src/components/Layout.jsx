import { Navbar } from "./nav/Navbar";
import { Outlet } from "react-router-dom";
import { Footers } from "./footers/Footers";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footers />
    </>
  );
}
