import Container from "../container/Container";
import Image from "next/image";
const Error500 = () => {
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
            <h1 class="block__title">
              {" "}
              5<span class="block__highlight">0</span>0{" "}
              <span class="block__title-span">It's not you it's us. Please try again later</span>{" "}
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Error500;
