import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import TrustedBy from "../components/TrustedBy";
import WebsiteFeature from "../components/WebsiteFeature";
import CustomSoftware from "../components/CustomSoftware";
import Process from "../components/Process";
import WhyPrayu from "../components/WhyPrayu";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <TrustedBy />
      <WebsiteFeature />
      <CustomSoftware />
      <Process />
      <WhyPrayu />
      <About />
    </>
  );
}
