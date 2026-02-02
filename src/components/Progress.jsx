import "./Progress.css";

export default function Progress({value = 0}) {
    return (
        <div className="progressBar" aria-label={`Completion ${value}%`}>
            <div className="progressFill" style={{width: `${value}%`}}/>
        </div>
    );
}
