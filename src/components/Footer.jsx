import { footerColumns, site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-brand">
              <img
                src={site.logo}
                alt=""
                className="logo-img"
                width="36"
                height="36"
              />
              <div>
                <strong>{site.name}</strong>
                <p>{site.role}</p>
              </div>
            </div>
            <p className="footer-blurb">
              Building modern, responsive websites and web applications from {site.location}.
            </p>
            <div className="socials">
              <a
                className="social-btn"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Murtaza Memon on GitHub"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                className="social-btn"
                href={site.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Murtaza Memon on Fiverr"
              >
                <i className="fas fa-briefcase" aria-hidden="true" />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul className="footer-links-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.external && <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />}{" "}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-inner">
          <p>
            © {new Date().getFullYear()} {site.name} — All rights reserved.
          </p>
          <a href="#hero" className="back-top">
            Back to top <i aria-hidden="true" className="fas fa-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
