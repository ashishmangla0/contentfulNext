import Link from "next/link";
import { useEffect } from "react";
const Footer = ({ children }) => {
    useEffect(() => {
        console.log(window.location.hostname) 
        console.log(window.location.href) // Logs `http://localhost:3000/blog/incididunt-ut-lobare-et-dolore`
    }, [])
  return (
    <>
      <footer>this is footer



      <div className="footer__bottom">
      {new Date().getFullYear()}
      </div>
      </footer>
    </>
  );
};

export default Footer;
