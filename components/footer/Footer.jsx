import Link from "next/link";
import { useEffect } from "react";
import Container from "../container/Container";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <Container>
          this is footer
          </Container>
        </div>
      
        <div className="footer__bottom">
          <Container>{new Date().getFullYear()}</Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
