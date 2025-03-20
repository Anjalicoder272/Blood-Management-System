import Footer from "./Footer";
import Header from "./Header";

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};


export default PrivateLayout;