import { useState } from "react";
import { site } from "../data/site.js";

export default function ProfilePhoto({ src, alt, className = "", eager = false }) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      className={className}
      alt={alt || `Portrait of ${site.name}`}
      loading={eager ? "eager" : "lazy"}
      onError={() => setCurrent(site.photoPlaceholder)}
    />
  );
}
