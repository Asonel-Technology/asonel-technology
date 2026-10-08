import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Asnol Technology` : "Asnol Technology";
  }, [title]);
}
