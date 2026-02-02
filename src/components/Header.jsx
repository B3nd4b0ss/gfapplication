import "./Header.css";
import Progress from "./Progress.jsx";

export default function Header({completion, step}) {
    return (
        <header className="header">
            <div className="headerInner">
                <div className="brand">
                    <div className="logo">R</div>
                    <div>
                        <div className="title">Official Girlfriend Application</div>
                        <div className="subtitle">
                            Relationship Candidate Screening • Step:{" "}
                            <strong>{step === "form" ? "Application" : "Review"}</strong>
                        </div>
                    </div>
                </div>

                <div className="headerRight">
                    <div className="metaBox">
                        <div className="metaLabel">Completion</div>
                        <div className="metaValue">{completion}%</div>
                    </div>
                    <Progress value={completion}/>
                </div>
            </div>
        </header>
    );
}
