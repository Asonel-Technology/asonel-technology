import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Asonel Technology` : "Asonel Technology";
  }, [title]);
}
