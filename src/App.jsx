import "./App.css";
import "./style.css";
import "./plugin.css";
import Header from "./components/Header/Header";
import Preloader from "./components/PreSwiper/Preloader";
import Swiper from "./components/PreSwiper/Swiper";
import Lefthome from "./components/Home/LeftHome/Lefthome";
import RightHome from "./components/Home/RightHome/RightHome";
import FireSection from "./components/FireSection/FireSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {
        //preloader
      }
   
      {
        //swiper
      }
      <Swiper />
      {
        //Navbar
      }
      <Navbar />
      {
        //Header
      }
      <Header />
      {
        //LeftHome
      }
      <Lefthome />
      {
        //RightHome
      }
      <RightHome />
      {
        //FireSection
      }
      <FireSection />
    </>
  );
}

export default App;
