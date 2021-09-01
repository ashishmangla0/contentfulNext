import Link from "next/link";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const MainLayout = ({ children }) => {
  return (
    <>
    <Header/>
      <main id="main">{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;
