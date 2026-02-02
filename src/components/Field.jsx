import "./Field.css";

export default function Field({label, hint, required, children, colSpan = 1}) {
    return (<div className="field" style={{gridColumn: `span ${colSpan}`}}>
        <div className="fieldLabelRow">
            <label className="fieldLabel">
                {label} {required ? <span className="req">*</span> : null}
            </label>
            {hint ? <span className="fieldHint">{hint}</span> : null}
        </div>
        <div className="fieldControl">{children}</div>
    </div>);
}
