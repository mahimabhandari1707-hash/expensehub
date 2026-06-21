function CtaSection({ onSignup }) {
    return (
        <section className="cta-section">
            <h2>Ready to take control?</h2>
            <p>Join 50,000+ people already tracking smarter.</p>
            <button className="hero-btn" onClick={onSignup}>
                Create free account →
            </button>
        </section>
    );
}

export default CtaSection;