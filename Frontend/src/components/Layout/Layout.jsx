import Header from "../Header/Header";
import Router from "../../router/Router";
import Footer from "../Footer/Footer";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-custom-darkvoid">
        <Header />
        <main className="pt-16">
          <Router />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;