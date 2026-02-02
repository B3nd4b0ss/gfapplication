import "./Review.css";
import Section from "../components/Section.jsx";

function Row({label, value}) {
    return (
        <div className="row">
            <div className="rowLabel">{label}</div>
            <div className="rowValue">{value || <span className="empty">—</span>}</div>
        </div>
    );
}

export default function Review({data, onBack, onExportPdf, onWhatsApp, onReset}) {
    return (
        <div className="page">
            <div className="pageHead">
                <h1>Review & Export</h1>
                <p>
                    Confirm the information below, then export the PDF for submission.
                </p>
            </div>

            <div className="stack">
                <Section title="Candidate Summary">
                    <div className="reviewGrid">
                        <Row label="Full Name" value={data.fullName}/>
                        <Row label="Nickname" value={data.nickname}/>
                        <Row label="Age" value={data.age}/>
                        <Row label="DOB" value={data.dob}/>
                        <Row label="City" value={data.city}/>
                        <Row label="Email" value={data.email}/>
                        <Row label="Phone" value={data.phone}/>
                        <Row label="Social" value={data.social}/>
                    </div>
                </Section>

                <Section title="Profile / Experience">
                    <div className="reviewGrid">
                        <Row label="Strengths" value={data.strengths}/>
                        <Row label="Weaknesses" value={data.weaknesses}/>
                        <Row label="Hobbies" value={data.hobbies}/>
                        <Row label="Longest Relationship" value={data.longestRel}/>
                        <Row label="Last Relationship Ended" value={data.lastEnded}/>
                        <Row label="Cheated" value={data.cheated}/>
                        <Row label="Cheated Explain" value={data.cheatedExplain}/>
                    </div>
                </Section>

                <Section title="Eligibility / Expectations">
                    <div className="reviewGrid">
                        <Row label="Status" value={data.relationshipStatus}/>
                        <Row label="Children" value={data.children}/>
                        <Row label="Smoke" value={data.smoke}/>
                        <Row label="Drink" value={data.drink}/>
                        <Row label="Exclusive" value={data.exclusive}/>
                        <Row label="Criminal Record" value={data.criminalRecord}/>
                        <Row label="Record Explain" value={data.criminalExplain}/>
                        <Row label="Looking For" value={data.lookingFor}/>
                        <Row label="Dealbreakers" value={data.dealbreakers}/>
                        <Row label="Love Language" value={data.loveLanguage}/>
                        <Row label="Jealousy" value={data.jealousy}/>
                        <Row label="Relocate" value={data.relocate}/>
                        <Row label="Notes" value={data.notes}/>
                    </div>
                </Section>

                <Section title="References">
                    <div className="reviewGrid">
                        <Row label="Reference 1 Name" value={data.ref1Name}/>
                        <Row label="Reference 1 Contact" value={data.ref1Contact}/>
                        <Row label="Reference 2 Name" value={data.ref2Name}/>
                        <Row label="Reference 2 Contact" value={data.ref2Contact}/>
                    </div>
                </Section>

                <Section title="Declaration">
                    <div className="reviewGrid">
                        <Row label="Agreed" value={data.agree ? "Yes" : "No"}/>
                        <Row label="Signature" value={data.signature}/>
                        <Row label="Signed Date" value={data.signedDate}/>
                    </div>
                </Section>

                <div className="actions">
                    <button className="btn btnGhost" onClick={onBack}>
                        ← Back to Form
                    </button>

                    <div className="rightActions">
                        <button className="btn btnDanger" onClick={onReset}>
                            Reset
                        </button>
                        <button className="btn btnPrimary" onClick={onExportPdf}>
                            Export PDF
                        </button>
                        <button className="btn btnSecondary" onClick={onWhatsApp}>
                            Send via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
