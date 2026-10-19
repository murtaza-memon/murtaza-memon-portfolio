export default function SectionHead({ tag, title, desc }) {
  return (
    <div className="section-head reveal">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-sub">{desc}</p>}
    </div>
  );
}
