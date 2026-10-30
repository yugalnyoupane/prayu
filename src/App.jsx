import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import useReveal from "./hooks/useReveal";
import { servicePages } from "./data/pages";

/* Each route is pre-rendered to static HTML at build time (scripts/prerender.mjs). */
export function findPage(path) {
  const clean = path.endsWith("/") ? path : `${path}/`;
  return servicePages.find((p) => p.path === clean) || null;
}

export default function App({ path = "/" }) {
  useReveal();
  const page = findPage(path);

  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        {page ? <ServicePage page={page} /> : <Home />}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
