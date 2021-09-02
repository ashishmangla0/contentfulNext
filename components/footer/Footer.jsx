import Container from "../container/Container";
import style from "./footer.module.scss";
const addressList = [
  "5A-BP/14, Near Banke Bihari Mandir, N.I.T, Faridabad-121001, Haryana",
  "Hno-1281D, Gali no-48, Near Beri Da Bagh, Laxman Vihar, Phase-I, Near railway Road, Gurgaon-122001 ",
  "In front of Nehru Sansthan, Station Road, Nai Mandi, Bharatpur-321001",
  "In front of Central Bank of India, Deeg, Bharatpur-321203",
  "A-113, Brother Hood Apartment, H Block, vikas Puri New Delhi 110018",
];
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__top}>
          <Container>
            <div className="row">
            <div className="col-12 col-lg-3 footer__col footer__col--location">
                <h5 className={style.footer__title}> Our Addresses: </h5>
                
              </div>
              <div className="col-12 col-lg-3 footer__col footer__col--location">
              <h5 className={style.footer__title}> Useful Links </h5>
                
              </div>
              <div className="col-12 col-lg-3 footer__col footer__col--location">
              <h5 className={style.footer__title}> What we do </h5>
                
              </div>
              <div className="col-12 col-lg-3 footer__col footer__col--location">
              <h5 className={style.footer__title}> Our Addresses </h5>
                {addressList.map((address,index) => (
                  <address key={`address${index}`} className={style.footer__address}>{address}</address>
                ))}
              </div>
            </div>
          </Container>
        </div>

        <div className={style.footer__bottom}>
          <Container>
            <div className="row">
              <div className={`col-12 ${style.footer__menu}`} role="menu">
                <a
                  className={style.footer__menuitem}
                  role="menuitem"
                  href="https://cagsn.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  className={style.footer__menuitem}
                  role="menuitem"
                  href="https://cagsn.com/sitemap/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sitemap
                </a>
              </div>
              <div className={`col-12 ${style.footer__content}`}>
                <div className="">
                  &copy; {new Date().getFullYear()} copyright all right reserved
                </div>
                <div className="">
                  Made with <span className="icon icon-heart"></span> in{" "}
                  <a
                    href="http://itvision.co.in/"
                    target="_blank"
                    className="footer__link-developer"
                    rel="noreferrer"
                  >
                    ITvision
                  </a>
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
