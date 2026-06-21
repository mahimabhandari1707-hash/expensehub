function Pricing({ onSignup }) {
    return (
        <section className="pricing" id="pricing">
            <div className="section-label">Pricing</div>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <h3>Free</h3>
                    <div className="price">₹0<span>/mo</span></div>
                    <ul>
                        <li>✓ Up to 50 transactions/month</li>
                        <li>✓ 3 expense categories</li>
                        <li>✓ Basic analytics</li>
                        <li>✗ Goal tracking</li>
                        <li>✗ Smart alerts</li>
                    </ul>
                    <button className="plan-btn" onClick={onSignup}>Get started</button>
                </div>
                <div className="pricing-card featured">
                    <div className="popular-badge">Most popular</div>
                    <h3>Pro</h3>
                    <div className="price">₹299<span>/mo</span></div>
                    <ul>
                        <li>✓ Unlimited transactions</li>
                        <li>✓ Unlimited categories</li>
                        <li>✓ Advanced analytics</li>
                        <li>✓ Goal tracking</li>
                        <li>✓ Smart alerts</li>
                    </ul>
                    <button className="plan-btn primary" onClick={onSignup}>Start free trial</button>
                </div>
            </div>
        </section>
    );
}

export default Pricing;