import { useState } from "react";

function Modal({ isOpen, onClose, onSuccess }) {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    }

    function handleSubmit() {
        const newErrors = {};
        if (form.name.trim().length < 2) newErrors.name = true;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;
        if (form.password.length < 6) newErrors.password = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setForm({ name: "", email: "", password: "" });
            setErrors({});
            onSuccess();
        }, 1400);
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay active" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                <div className="modal-icon">⬡</div>
                <h2>Create your free account</h2>
                <p>Start tracking in under 2 minutes. No credit card needed.</p>
                <div className="modal-form">
                    <input
                        name="name"
                        placeholder="Full name"
                        value={form.name}
                        className={errors.name ? "error" : ""}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        placeholder="Email address"
                        value={form.email}
                        className={errors.email ? "error" : ""}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        className={errors.password ? "error" : ""}
                        onChange={handleChange}
                    />
                    <button
                        className="modal-submit"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Create Account →"}
                    </button>
                </div>
                <p className="modal-footer-text">
                    Already have an account? <a href="#">Log in</a>
                </p>
            </div>
        </div>
    );
}

export default Modal;