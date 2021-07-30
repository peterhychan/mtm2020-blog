import Footer from "../home/footer";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
