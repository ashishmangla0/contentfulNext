
import ErrorLayout from "../components/layouts/ErrorLayout";
import MainLayout from "../components/layouts/MainLayout";
const layouts = {
  ErrorLayout: ErrorLayout,
  MainLayout: MainLayout,
};
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
