function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-brand">
                    <span className="logo-icon">⬡</span>
                    <span className="logo-text">ExpenseHub</span>
                    <p>The smarter way to manage money.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Product</h4>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#">Changelog</a>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Security</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 ExpenseHub. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;