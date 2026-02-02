import "./Section.css";

export default function Section({title, subtitle, children}) {
    return (
        <section className="sectionCard">
            <div className="sectionHead">
                <div className="sectionTitle">{title}</div>
                {subtitle ? <div className="sectionSubtitle">{subtitle}</div> : null}
            </div>
            <div className="sectionBody">{children}</div>
        </section>
    );
}
