import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage unavailable */
    }
    setTheme(next);
  };

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="nav container" aria-label="Main navigation">
          <a href="#hero" className="logo" aria-label={`${site.name} — Home`}>
            <img
              src={site.logo}
              alt=""
              className="logo-img"
              width="40"
              height="40"
            />
            <span className="logo-text">{site.name}</span>
          </a>

          <ul className={`nav-links${open ? " open" : ""}`} id="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${active === link.href ? " active" : ""}`}
                  aria-current={active === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-cta-mobile">
              <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </li>
          </ul>

          <a href="#contact" className="nav-cta nav-cta-desktop">
            Hire Me
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i aria-hidden="true" className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} />
          </button>
          <button
            className={`menu-toggle${open ? " open" : ""}`}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>
      <div
        className={`nav-backdrop${open ? " show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
