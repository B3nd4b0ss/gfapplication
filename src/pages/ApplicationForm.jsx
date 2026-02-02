import "./ApplicationForm.css";
import Section from "../components/Section.jsx";
import Field from "../components/Field.jsx";

function Input(props) {
    return <input className="input" {...props} />;
}

function Textarea(props) {
    return <textarea className="textarea" {...props} />;
}

function Select(props) {
    return <select className="select" {...props} />;
}

function RadioRow({name, value, checked, onChange, label}) {
    return (
        <label className="radio">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
            />
            <span>{label}</span>
        </label>
    );
}

function Checkbox({checked, onChange, label}) {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span>{label}</span>
        </label>
    );
}

export default function ApplicationForm({data, onChange, onNext, onReset}) {
    return (
        <div className="page">
            <div className="pageHead">
                <h1>Candidate Application Form</h1>
                <p>
                    Please complete all fields honestly. This document may be used for
                    future relationship performance reviews.
                </p>
            </div>

            <div className="stack">
                <Section
                    title="Section A — Candidate Identification"
                    subtitle="Basic identity information for recruitment records."
                >
                    <div className="grid">
                        <Field label="Full Legal Name" required>
                            <Input
                                value={data.fullName}
                                onChange={(e) => onChange({fullName: e.target.value})}
                                placeholder="e.g. Jane Applicant"
                            />
                        </Field>

                        <Field label="Preferred Name / Nickname">
                            <Input
                                value={data.nickname}
                                onChange={(e) => onChange({nickname: e.target.value})}
                                placeholder="e.g. JJ"
                            />
                        </Field>

                        <Field label="Age" required hint="Must be 18+">
                            <Input
                                type="number"
                                min={18}
                                value={data.age}
                                onChange={(e) => onChange({age: e.target.value})}
                                placeholder="18"
                            />
                        </Field>

                        <Field label="Date of Birth">
                            <Input
                                type="date"
                                value={data.dob}
                                onChange={(e) => onChange({dob: e.target.value})}
                            />
                        </Field>

                        <Field label="Height">
                            <Input
                                value={data.height}
                                onChange={(e) => onChange({height: e.target.value})}
                                placeholder="e.g. 170cm"
                            />
                        </Field>

                        <Field label="Weight">
                            <Input
                                value={data.weight}
                                onChange={(e) => onChange({weight: e.target.value})}
                                placeholder="Optional"
                            />
                        </Field>

                        <Field label="Current City" colSpan={2}>
                            <Input
                                value={data.city}
                                onChange={(e) => onChange({city: e.target.value})}
                                placeholder="Where do you live?"
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section B — Contact Details"
                    subtitle="How the hiring manager may reach you."
                >
                    <div className="grid">
                        <Field label="Email" required>
                            <Input
                                type="email"
                                value={data.email}
                                onChange={(e) => onChange({email: e.target.value})}
                                placeholder="name@example.com"
                            />
                        </Field>

                        <Field label="Phone Number">
                            <Input
                                value={data.phone}
                                onChange={(e) => onChange({phone: e.target.value})}
                                placeholder="+41 ..."
                            />
                        </Field>

                        <Field label="Instagram / Social Handle" colSpan={2}>
                            <Input
                                value={data.social}
                                onChange={(e) => onChange({social: e.target.value})}
                                placeholder="@yourhandle"
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section C — Relationship Eligibility"
                    subtitle="Compliance and eligibility screening."
                >
                    <div className="grid">
                        <Field label="Current Relationship Status" required colSpan={2}>
                            <Select
                                value={data.relationshipStatus}
                                onChange={(e) =>
                                    onChange({relationshipStatus: e.target.value})
                                }
                            >
                                <option value="">Select…</option>
                                <option value="single">Single</option>
                                <option value="situationship">Situationship</option>
                                <option value="complicated">It's complicated</option>
                                <option value="taken">Taken (not eligible)</option>
                            </Select>
                        </Field>

                        <Field label="Do you have children?">
                            <Select
                                value={data.children}
                                onChange={(e) => onChange({children: e.target.value})}
                            >
                                <option value="">Select…</option>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                                <option value="preferNot">Prefer not to say</option>
                            </Select>
                        </Field>

                        <Field label="Do you smoke?">
                            <Select
                                value={data.smoke}
                                onChange={(e) => onChange({smoke: e.target.value})}
                            >
                                <option value="">Select…</option>
                                <option value="no">No</option>
                                <option value="sometimes">Sometimes</option>
                                <option value="yes">Yes</option>
                            </Select>
                        </Field>

                        <Field label="Do you drink alcohol?">
                            <Select
                                value={data.drink}
                                onChange={(e) => onChange({drink: e.target.value})}
                            >
                                <option value="">Select…</option>
                                <option value="no">No</option>
                                <option value="socially">Socially</option>
                                <option value="yes">Yes</option>
                            </Select>
                        </Field>

                        <Field label="Are you willing to commit? (Exclusive)">
                            <div className="inline">
                                <RadioRow
                                    name="exclusive"
                                    value="yes"
                                    label="Yes"
                                    checked={data.exclusive === "yes"}
                                    onChange={(v) => onChange({exclusive: v})}
                                />
                                <RadioRow
                                    name="exclusive"
                                    value="no"
                                    label="No"
                                    checked={data.exclusive === "no"}
                                    onChange={(v) => onChange({exclusive: v})}
                                />
                            </div>
                        </Field>

                        <Field label="Do you have a criminal record?">
                            <div className="inline">
                                <RadioRow
                                    name="record"
                                    value="no"
                                    label="No"
                                    checked={data.criminalRecord === "no"}
                                    onChange={(v) => onChange({criminalRecord: v})}
                                />
                                <RadioRow
                                    name="record"
                                    value="yes"
                                    label="Yes"
                                    checked={data.criminalRecord === "yes"}
                                    onChange={(v) => onChange({criminalRecord: v})}
                                />
                            </div>
                        </Field>

                        <Field label="If yes, explain" colSpan={2}>
                            <Textarea
                                value={data.criminalExplain}
                                onChange={(e) => onChange({criminalExplain: e.target.value})}
                                placeholder="Provide details (optional)."
                                rows={3}
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section D — Personal Profile"
                    subtitle="Describe yourself like a serious candidate."
                >
                    <div className="grid">
                        <Field label="Strengths" colSpan={2}>
                            <Textarea
                                value={data.strengths}
                                onChange={(e) => onChange({strengths: e.target.value})}
                                placeholder="What makes you an excellent candidate?"
                                rows={4}
                            />
                        </Field>

                        <Field label="Weaknesses" colSpan={2}>
                            <Textarea
                                value={data.weaknesses}
                                onChange={(e) => onChange({weaknesses: e.target.value})}
                                placeholder="Be honest. I respect transparency."
                                rows={4}
                            />
                        </Field>

                        <Field label="Hobbies / Interests" colSpan={2}>
                            <Textarea
                                value={data.hobbies}
                                onChange={(e) => onChange({hobbies: e.target.value})}
                                placeholder="List hobbies and interests."
                                rows={3}
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section E — Relationship Experience"
                    subtitle="Prior employment history in relationship environments."
                >
                    <div className="grid">
                        <Field label="Longest relationship duration">
                            <Input
                                value={data.longestRel}
                                onChange={(e) => onChange({longestRel: e.target.value})}
                                placeholder="e.g. 2 years"
                            />
                        </Field>

                        <Field label="Last relationship ended because…">
                            <Input
                                value={data.lastEnded}
                                onChange={(e) => onChange({lastEnded: e.target.value})}
                                placeholder="Short answer"
                            />
                        </Field>

                        <Field label="Have you ever cheated?">
                            <div className="inline">
                                <RadioRow
                                    name="cheated"
                                    value="no"
                                    label="No"
                                    checked={data.cheated === "no"}
                                    onChange={(v) => onChange({cheated: v})}
                                />
                                <RadioRow
                                    name="cheated"
                                    value="yes"
                                    label="Yes"
                                    checked={data.cheated === "yes"}
                                    onChange={(v) => onChange({cheated: v})}
                                />
                            </div>
                        </Field>

                        <Field label="If yes, explain">
                            <Input
                                value={data.cheatedExplain}
                                onChange={(e) => onChange({cheatedExplain: e.target.value})}
                                placeholder="Optional"
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section F — Expectations"
                    subtitle="Define terms and conditions."
                >
                    <div className="grid">
                        <Field label="What are you looking for?" colSpan={2}>
                            <Textarea
                                value={data.lookingFor}
                                onChange={(e) => onChange({lookingFor: e.target.value})}
                                rows={4}
                                placeholder="Short-term / long-term / marriage / etc."
                            />
                        </Field>

                        <Field label="Dealbreakers (yours)" colSpan={2}>
                            <Textarea
                                value={data.dealbreakers}
                                onChange={(e) => onChange({dealbreakers: e.target.value})}
                                rows={4}
                                placeholder="List dealbreakers."
                            />
                        </Field>

                        <Field label="Your love language">
                            <Select
                                value={data.loveLanguage}
                                onChange={(e) => onChange({loveLanguage: e.target.value})}
                            >
                                <option value="">Select…</option>
                                <option value="words">Words of Affirmation</option>
                                <option value="quality">Quality Time</option>
                                <option value="gifts">Receiving Gifts</option>
                                <option value="acts">Acts of Service</option>
                                <option value="touch">Physical Touch</option>
                            </Select>
                        </Field>

                        <Field label="Jealousy level">
                            <Select
                                value={data.jealousy}
                                onChange={(e) => onChange({jealousy: e.target.value})}
                            >
                                <option value="">Select…</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </Select>
                        </Field>

                        <Field label="Willing to relocate?">
                            <div className="inline">
                                <RadioRow
                                    name="relocate"
                                    value="yes"
                                    label="Yes"
                                    checked={data.relocate === "yes"}
                                    onChange={(v) => onChange({relocate: v})}
                                />
                                <RadioRow
                                    name="relocate"
                                    value="no"
                                    label="No"
                                    checked={data.relocate === "no"}
                                    onChange={(v) => onChange({relocate: v})}
                                />
                            </div>
                        </Field>

                        <Field label="Notes" colSpan={2}>
                            <Textarea
                                value={data.notes}
                                onChange={(e) => onChange({notes: e.target.value})}
                                rows={3}
                                placeholder="Anything else I should know?"
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section G — References"
                    subtitle="Provide individuals who can confirm candidate quality."
                >
                    <div className="grid">
                        <Field label="Reference #1 (Name)">
                            <Input
                                value={data.ref1Name}
                                onChange={(e) => onChange({ref1Name: e.target.value})}
                                placeholder="Full name"
                            />
                        </Field>

                        <Field label="Reference #1 (Contact)">
                            <Input
                                value={data.ref1Contact}
                                onChange={(e) => onChange({ref1Contact: e.target.value})}
                                placeholder="Phone / email"
                            />
                        </Field>

                        <Field label="Reference #2 (Name)">
                            <Input
                                value={data.ref2Name}
                                onChange={(e) => onChange({ref2Name: e.target.value})}
                                placeholder="Full name"
                            />
                        </Field>

                        <Field label="Reference #2 (Contact)">
                            <Input
                                value={data.ref2Contact}
                                onChange={(e) => onChange({ref2Contact: e.target.value})}
                                placeholder="Phone / email"
                            />
                        </Field>
                    </div>
                </Section>

                <Section
                    title="Section H — Candidate Declaration"
                    subtitle="Legal-ish agreement. (Very serious.)"
                >
                    <div className="grid">
                        <Field label="Declaration" colSpan={2}>
                            <div className="declaration">
                                I hereby certify that the information provided is true and
                                accurate to the best of my knowledge. I understand that false
                                statements may result in disqualification from consideration.
                            </div>
                        </Field>

                        <Field label="I agree to the declaration" required colSpan={2}>
                            <Checkbox
                                checked={!!data.agree}
                                onChange={(v) => onChange({agree: v})}
                                label="Yes, I certify this application."
                            />
                        </Field>

                        <Field label="Signature (Type Full Name)" required colSpan={2}>
                            <Input
                                value={data.signature}
                                onChange={(e) => onChange({signature: e.target.value})}
                                placeholder="Type your full name"
                            />
                        </Field>

                        <Field label="Date Signed" required>
                            <Input
                                type="date"
                                value={data.signedDate}
                                onChange={(e) => onChange({signedDate: e.target.value})}
                            />
                        </Field>
                    </div>
                </Section>

                <div className="actions">
                    <button className="btn btnGhost" type="button" onClick={onReset}>
                        Reset Draft
                    </button>
                    <button
                        className="btn btnPrimary"
                        type="button"
                        onClick={onNext}
                        disabled={!data.agree || !data.signature || !data.fullName}
                        title={
                            !data.agree || !data.signature || !data.fullName
                                ? "Fill required fields and agree to declaration"
                                : "Continue"
                        }
                    >
                        Review Application →
                    </button>
                </div>
            </div>
        </div>
    );
}
