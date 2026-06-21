const features = [
    { icon: "📊", title: "Smart Analytics", desc: "Visual breakdowns of where your money goes, updated in real time." },
    { icon: "🗂️", title: "Auto-Categorize", desc: "AI-powered tagging sorts your transactions the moment they arrive." },
    { icon: "🎯", title: "Goal Tracking", desc: "Set savings milestones and watch your progress in live charts." },
    { icon: "🔔", title: "Smart Alerts", desc: "Get notified before you overspend — not after the damage is done." },
    { icon: "🔒", title: "Bank-Level Security", desc: "256-bit encryption. Your data is private and always protected." },
    { icon: "📱", title: "Mobile First", desc: "Works beautifully on any device — phone, tablet, or desktop." },
];

function Features() {
    return (
        <section className="features" id="features">
            <div className="section-label">Features</div>
            <h2 className="section-title">Everything you need to stay on top</h2>
            <div className="features-grid">
                {features.map((f, i) => (
                    <div className="feature-card" key={i}>
                        <div className="feature-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;