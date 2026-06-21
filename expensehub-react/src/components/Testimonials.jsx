const testimonials = [
    {
        initials: "RK",
        name: "Rohan Kulkarni",
        role: "Software Engineer, Pune",
        text: "I saved ₹8,000 in the first month just by seeing where my money actually went. Mind-blowing."
    },
    {
        initials: "PS",
        name: "Priya Sharma",
        role: "Freelance Designer, Bangalore",
        text: "Finally, a budgeting app that doesn't make me feel like I'm filing taxes. Clean, fast, intuitive."
    },
    {
        initials: "AM",
        name: "Aditya Mehta",
        role: "MBA Student, Mumbai",
        text: "The goal tracker is what sold me. I can literally watch my travel fund grow every week."
    },
];

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">People who made the switch</h2>
            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div className="testimonial-card" key={i}>
                        <p>"{t.text}"</p>
                        <div className="testimonial-author">
                            <div className="avatar">{t.initials}</div>
                            <div>
                                <strong>{t.name}</strong>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;