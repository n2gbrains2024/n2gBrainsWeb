import { useEffect } from "react";
export default function ScrollRestoration() {
  window.scrollTo(0, 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
