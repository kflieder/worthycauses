type ScrollIntent = {
    subject?: string;
    message?: string;
}

export function scrollToSection(id: string, intent?: ScrollIntent) {
    const section = document.getElementById(id);
    if(!section) return;

    if (intent) {
        const params = new URLSearchParams();
        if (intent.subject) params.append('subject', intent.subject);
        if (intent.message) params.append('message', intent.message);
        history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    }

    section.scrollIntoView({ behavior: 'smooth' });
}