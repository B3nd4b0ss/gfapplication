import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function safe(v) {
    if (v === undefined || v === null) return "";
    if (typeof v === "boolean") return v ? "Yes" : "No";
    return String(v);
}

export async function generateApplicationPdfUrl(data) {
    const doc = new jsPDF({unit: "pt", format: "a4"});
    const marginX = 40;
    let y = 50;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Official Girlfriend Application (HR Format)", marginX, y);

    y += 18;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleString()}`, marginX, y);

    y += 20;

    const sections = [
        {
            title: "A — Candidate Identification",
            rows: [
                ["Full Legal Name", safe(data.fullName)],
                ["Preferred Name / Nickname", safe(data.nickname)],
                ["Age", safe(data.age)],
                ["Date of Birth", safe(data.dob)],
                ["Height", safe(data.height)],
                ["Weight", safe(data.weight)],
                ["Current City", safe(data.city)],
            ],
        },
        {
            title: "B — Contact Details",
            rows: [
                ["Email", safe(data.email)],
                ["Phone", safe(data.phone)],
                ["Social", safe(data.social)],
            ],
        },
        {
            title: "C — Relationship Eligibility",
            rows: [
                ["Relationship Status", safe(data.relationshipStatus)],
                ["Children", safe(data.children)],
                ["Smoke", safe(data.smoke)],
                ["Drink", safe(data.drink)],
                ["Exclusive", safe(data.exclusive)],
                ["Criminal Record", safe(data.criminalRecord)],
                ["Record Explanation", safe(data.criminalExplain)],
            ],
        },
        {
            title: "D — Personal Profile",
            rows: [
                ["Strengths", safe(data.strengths)],
                ["Weaknesses", safe(data.weaknesses)],
                ["Hobbies / Interests", safe(data.hobbies)],
            ],
        },
        {
            title: "E — Relationship Experience",
            rows: [
                ["Longest relationship duration", safe(data.longestRel)],
                ["Last relationship ended because", safe(data.lastEnded)],
                ["Ever cheated", safe(data.cheated)],
                ["Cheating explanation", safe(data.cheatedExplain)],
            ],
        },
        {
            title: "F — Expectations",
            rows: [
                ["Looking for", safe(data.lookingFor)],
                ["Dealbreakers", safe(data.dealbreakers)],
                ["Love language", safe(data.loveLanguage)],
                ["Jealousy level", safe(data.jealousy)],
                ["Relocate", safe(data.relocate)],
                ["Notes", safe(data.notes)],
            ],
        },
        {
            title: "G — References",
            rows: [
                ["Reference #1 Name", safe(data.ref1Name)],
                ["Reference #1 Contact", safe(data.ref1Contact)],
                ["Reference #2 Name", safe(data.ref2Name)],
                ["Reference #2 Contact", safe(data.ref2Contact)],
            ],
        },
        {
            title: "H — Declaration",
            rows: [
                ["Candidate agreed", safe(data.agree)],
                ["Signature", safe(data.signature)],
                ["Date signed", safe(data.signedDate)],
            ],
        },
    ];


    for (const section of sections) {
        autoTable(doc, {
            startY: y,
            margin: {left: marginX, right: marginX},
            head: [[section.title, ""]],
            body: section.rows,
            theme: "grid",
            styles: {font: "helvetica", fontSize: 10, cellPadding: 6},
            headStyles: {fillColor: [11, 18, 32], textColor: 255},
            columnStyles: {0: {cellWidth: 180}, 1: {cellWidth: "auto"}},
        });
        y = doc.lastAutoTable.finalY + 16;
        if (y > 760) {
            doc.addPage();
            y = 50;
        }
    }

    const blob = doc.output("blob");
    return URL.createObjectURL(blob);
}

