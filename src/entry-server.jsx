import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { servicePages } from "./data/pages";
export { siteUrl, business, contact, socials, clients } from "./data/site";

export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>
  );
}
