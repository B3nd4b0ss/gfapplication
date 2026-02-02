import {useMemo, useState} from "react";
import Header from "./components/Header.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";
import Review from "./pages/Review.jsx";
import {loadDraft, saveDraft, clearDraft} from "./utils/storage.js";
import {generateApplicationPdfUrl} from "./utils/pdf.js";

export default function App() {
    const [step, setStep] = useState("form"); // form | review
    const [data, setData] = useState(() => loadDraft());

    const completion = useMemo(() => {
        const fields = Object.values(data).filter((v) => v !== undefined);
        const filled = fields.filter((v) => {
            if (typeof v === "string") return v.trim().length > 0;
            if (Array.isArray(v)) return v.length > 0;
            if (typeof v === "boolean") return true;
            return v !== null;
        }).length;
        return Math.round((filled / Math.max(fields.length, 1)) * 100);
    }, [data]);

    function update(patch) {
        const next = {...data, ...patch};
        setData(next);
        saveDraft(next);
    }

    function onReset() {
        clearDraft();
        setData(loadDraft(true));
        setStep("form");
    }

    async function onExportPdf() {
        await generateApplicationPdfUrl(data);
    }

    async function onWhatsApp() {
        const phone = import.meta.env.VITE_PHONE;
        const pdfUrl = await generateApplicationPdfUrl(data);
        const text = encodeURIComponent(
            "Hello! Here is my Official Girlfriend Application PDF: " + pdfUrl
        );
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    }

    return (
        <div className="appShell">
            <Header completion={completion} step={step}/>

            <main className="container">
                {step === "form" ? (
                    <ApplicationForm
                        data={data}
                        onChange={update}
                        onNext={() => setStep("review")}
                        onReset={onReset}
                    />
                ) : (
                    <Review
                        data={data}
                        onBack={() => setStep("form")}
                        onExportPdf={onExportPdf}
                        onWhatsApp={onWhatsApp}
                        onReset={onReset}
                    />
                )}
            </main>

            <footer className="footer">
                <span>© {new Date().getFullYear()} Relationship Recruitment Department</span>
            </footer>
        </div>
    );
}
