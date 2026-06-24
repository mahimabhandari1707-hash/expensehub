function Hero({ onSignup }) {
    return (
        <section className="hero" id="home">
            <div className="hero-badge">✦ Trusted by 50,000+ people</div>
            <h1>
                Master Your <em>Finances.</em><br />
                Effortlessly Track &amp;<br />
                Manage Expenses.
            </h1>
            <p className="hero-sub">
                The smarter way to budget, categorize spending,<br />
                and achieve your financial goals — all in one place.
            </p>
            <div className="hero-actions">
                <button className="hero-btn" onClick={onSignup}>
                    Get Started — It's Free
                </button>
                <a href="#features" className="hero-link">See how it works →</a>
            </div>
            <div className="dashboard-container">
                <div className="dashboard-glow"></div>
                <img
                    src="/images/hero-dashboard.jpeg"
                    className="dashboard-img"
                    alt="ExpenseHub Dashboard"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default Hero;