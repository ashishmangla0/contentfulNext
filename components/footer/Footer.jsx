import Link from "next/link";
import { useEffect } from "react";
import Container from "../container/Container";
import style from './footer.module.scss';
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__top}>
          <Container>
          this is footer
          </Container>
        </div>
      
        <div className={style.footer__bottom}>
          <Container>
            <div className="row">
              <div className={`col-12 ${style.footer__menu}`} role="menu">
                <a className={style.footer__menuitem} role="menuitem" href="https://cagsn.com/privacy-policy/" target="_blank">Privacy Policy</a>
                <a className={style.footer__menuitem} role="menuitem" href="https://cagsn.com/sitemap/" target="_blank">Sitemap</a>
              </div>
              <div className={`col-12 ${style.footer__content}`}>
                <div className="">
                &copy; {new Date().getFullYear()} copyright all right reserved
                </div>
                <div className="">
                Made with <span class="icon icon-heart"></span> in <a href="http://itvision.co.in/" target="_blank" class="footer__link-developer">ITvision</a>
                </div>
              </div>

            </div>
            
            </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
