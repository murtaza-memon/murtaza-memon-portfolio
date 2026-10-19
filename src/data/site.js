export const site = {
  name: "Murtaza Memon",
  initials: "MM",
  role: "Full Stack Developer & WordPress Website Developer",
  location: "Larkana, Sindh, Pakistan",
  email: "murtazamemon738@gmail.com",
  phones: [
    { label: "+92 319 7393381", href: "tel:+923197393381" },
    { label: "+92 346 8243513", href: "tel:+923468243513" },
  ],
  github: "https://github.com/murtaza-memon",
  fiverr: "https://www.fiverr.com/users/dev_murtazaa/",
  heroPhoto: "images/murtaza-hero.png.jpeg",
  aboutPhoto: "images/murtaza-about.png.jpeg",
  logo: "images/murtaza-logo.png.jpeg",
  photoPlaceholder: "images/photo-placeholder.svg",
};

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#education", label: "Education" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  greeting: "Hi, I'm Murtaza Memon 👋",
  titleLine1: "Full Stack Developer",
  titleLine2: "& WordPress Website Developer",
  description:
    "I build modern, responsive websites and web applications with a focus on clean design, usability, and practical functionality. I enjoy turning ideas into useful digital experiences through frontend development, backend technologies, and WordPress.",
  primary: { label: "View My Work", href: "#projects" },
  secondary: { label: "Contact Me", href: "#contact" },
};

export const about = {
  paragraphs: [
    "I'm Murtaza Memon, a full stack developer based in Larkana, Sindh, Pakistan, with an Intermediate in Engineering background from Government Boys Degree College, Larkana. My real interest sits in full-stack web development — building complete products from the interface all the way to the backend.",
    "Alongside my studies I take on freelance and personal development work: designing and building responsive websites and web applications with modern web technologies, and delivering WordPress and Elementor websites for businesses that need a clean, professional online presence.",
    "I care about clean design, usability, and practical functionality, and I'm continuously learning new tools and improving my skills so I can build better, more reliable digital experiences.",
  ],
  cards: [
    { icon: "fas fa-location-dot", title: "Location", text: "Larkana, Sindh, Pakistan" },
    { icon: "fas fa-graduation-cap", title: "Education", text: "Intermediate in Engineering — Government Boys Degree College, Larkana" },
    { icon: "fas fa-code", title: "Focus", text: "Full-stack web development & WordPress" },
    { icon: "fas fa-briefcase", title: "Freelance", text: "Available for freelance work via Fiverr" },
  ],
};

export const skillGroups = [
  {
    name: "Frontend",
    icon: "fas fa-code",
    items: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "React.js", icon: "fab fa-react" },
      { name: "Next.js", icon: "fas fa-cube" },
    ],
  },
  {
    name: "Backend",
    icon: "fas fa-server",
    items: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fas fa-bolt" },
      { name: "PHP", icon: "fab fa-php" },
      { name: "REST APIs", icon: "fas fa-right-left" },
    ],
  },
  {
    name: "Database",
    icon: "fas fa-database",
    items: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-leaf" },
    ],
  },
  {
    name: "CMS & E-Commerce",
    icon: "fas fa-puzzle-piece",
    items: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "Elementor", icon: "fas fa-layer-group" },
      { name: "WooCommerce", icon: "fas fa-cart-shopping" },
    ],
  },
  {
    name: "Tools & Professional Skills",
    icon: "fas fa-tools",
    items: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Responsive Web Design", icon: "fas fa-mobile-screen-button" },
      { name: "Website Deployment", icon: "fas fa-cloud-arrow-up" },
    ],
  },
];

export const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Full Stack Web Development",
    desc: "Development of responsive web applications and functional websites using suitable frontend and backend technologies.",
  },
  {
    icon: "fab fa-wordpress",
    title: "WordPress Website Development",
    desc: "Professional WordPress websites, Elementor layouts, responsive business websites, and website customization.",
  },
  {
    icon: "fab fa-react",
    title: "React.js Development",
    desc: "Modern user interfaces, reusable components, responsive layouts, and frontend implementation.",
  },
  {
    icon: "fas fa-screwdriver-wrench",
    title: "Website Maintenance and Bug Fixing",
    desc: "Troubleshooting website errors, fixing layout issues, improving responsiveness, and maintaining existing websites.",
  },
];

export const education = {
  degree: "Intermediate in Engineering",
  institution: "Government Boys Degree College, Larkana",
  location: "Larkana, Sindh, Pakistan",
  // Add dates later once confirmed, e.g. date: "2022 – 2024"
  date: "",
  note: "Higher secondary education with a focus on engineering preparation.",
};

export const journey = [
  {
    title: "Freelance Web Development",
    period: "Freelance",
    org: "Independent · Fiverr",
    text: "Building responsive websites and web applications as freelance and personal work — from frontend interfaces to complete WordPress sites, delivered through my Fiverr profile.",
  },
  {
    title: "Personal Projects",
    period: "Practice",
    org: "React · Node.js · PHP",
    text: "Hands-on projects using modern frontend and backend technologies to turn theory into working builds and strengthen practical full-stack skills.",
  },
  {
    title: "Self-Directed Learning",
    period: "Learning",
    org: "Continuous improvement",
    text: "Ongoing learning through official documentation, tutorials, and experimentation with new tools — keeping my skills current as web technologies evolve.",
  },
];

export const projectChips = ["React", "WordPress", "Node.js", "PHP", "MySQL"];

export const contactCards = [
  { icon: "fas fa-envelope", key: "Email", href: `mailto:${site.email}`, value: site.email },
  { icon: "fas fa-phone", key: "Phone", href: site.phones[0].href, value: site.phones[0].label },
  { icon: "fas fa-phone", key: "Alternate Phone", href: site.phones[1].href, value: site.phones[1].label },
  { icon: "fas fa-map-marker-alt", key: "Location", value: site.location },
];

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Education", href: "#education" },
      { label: "Journey", href: "#journey" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Full Stack Web Development", href: "#services" },
      { label: "WordPress Development", href: "#services" },
      { label: "React.js Development", href: "#services" },
      { label: "Website Maintenance", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "GitHub", href: site.github, external: true },
      { label: "Fiverr Profile", href: site.fiverr, external: true },
    ],
  },
];
