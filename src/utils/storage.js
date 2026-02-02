const KEY = "girlfriend_app_draft_v1";

export function loadDraft(reset = false) {
    if (reset) return getEmpty();
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return getEmpty();
        return {...getEmpty(), ...JSON.parse(raw)};
    } catch {
        return getEmpty();
    }
}

export function saveDraft(data) {
    try {
        localStorage.setItem(KEY, JSON.stringify(data));
    } catch {
    }
}

export function clearDraft() {
    try {
        localStorage.removeItem(KEY);
    } catch {
    }
}

function getEmpty() {
    return {
        fullName: "",
        nickname: "",
        age: "",
        dob: "",
        height: "",
        weight: "",
        city: "",
        email: "",
        phone: "",
        social: "",

        relationshipStatus: "",
        children: "",
        smoke: "",
        drink: "",
        exclusive: "",
        criminalRecord: "",
        criminalExplain: "",

        strengths: "",
        weaknesses: "",
        hobbies: "",

        longestRel: "",
        lastEnded: "",
        cheated: "",
        cheatedExplain: "",

        lookingFor: "",
        dealbreakers: "",
        loveLanguage: "",
        jealousy: "",
        relocate: "",
        notes: "",

        ref1Name: "",
        ref1Contact: "",
        ref2Name: "",
        ref2Contact: "",

        agree: false,
        signature: "",
        signedDate: "",
    };
}
