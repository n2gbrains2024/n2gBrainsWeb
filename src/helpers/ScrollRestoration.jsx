import { useEffect } from "react";
export default function ScrollRestoration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
