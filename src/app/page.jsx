
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import HeroCarousel from "@/components/Hero";
import Main from "@/components/main";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      
      <Navbar/>
      <HeroCarousel/>
      <Main/> 
      <Footer/>
    </div>
  );
}
