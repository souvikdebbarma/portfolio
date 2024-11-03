import Header from "../Header/Header";
import Router from "../../router/Router";
import Footer from "../Footer/Footer";
import CustomCursor from "../CustomCursor/CustomCursor";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <LoadingScreen />
      <CustomCursor />
      <ScrollToTop />
      <div className="bg-custom-snow dark:bg-custom-darkvoid">
        <Header />
        <Router />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;