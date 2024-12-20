import Cta8 from "@/components/sections/Cta8";
import Layout from "@/components/layout/Layout";
import Blog1 from "@/components/sections/Blog1";
import Hero1 from "@/components/sections/Hero1";
import Static3 from "@/components/sections/Static3";
import Features1 from "@/components/sections/Features1";
import Services1 from "@/components/sections/Services1";
import LogoCloud1 from "@/components/sections/LogoCloud1";
import Testimonial1 from "@/components/sections/Testimonial1";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <Hero1 />
        <LogoCloud1 />
        <Features1 />
        <Cta8 />
        <Services1 />
        <Static3 />
        <Testimonial1 />
        <Blog1 />
      </Layout>
    </>
  );
}
