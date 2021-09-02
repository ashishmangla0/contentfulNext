import Container from "../container/Container";
import Image from "next/image";
const Error404 = () => {
  return (
    <section>
      sadfdsfsd
      <Container>
        <div className="row">
          <div className="col-md-6">
            <Image
              alt="404 Image"
              src="w_550/v1628325442/404.jpg"
              width={550}
              height={393}
            />
          </div>
          <div className="col-md-6">
            <h1 className="block__title">4<span className="block__highlight">0</span>4
              <span className="block__title-span">oops! page not found</span>
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Error404;
