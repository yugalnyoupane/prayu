import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import TrustedBy from "./components/TrustedBy";
import WebsiteFeature from "./components/WebsiteFeature";
import CustomSoftware from "./components/CustomSoftware";
import Process from "./components/Process";
import WhyPrayu from "./components/WhyPrayu";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Industries />
        <TrustedBy />
        <WebsiteFeature />
        <CustomSoftware />
        <Process />
        <WhyPrayu />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
