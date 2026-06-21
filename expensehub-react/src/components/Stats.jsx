const stats = [
    { number: "50K+", label: "Active users" },
    { number: "₹2.4Cr", label: "Tracked monthly" },
    { number: "4.9 ★", label: "Average rating" },
    { number: "99.9%", label: "Uptime" },
];

function Stats() {
    return (
        <section className="stats">
            {stats.map((s, i) => (
                <div className="stat" key={i}>
                    <span className="stat-number">{s.number}</span>
                    <span className="stat-label">{s.label}</span>
                </div>
            ))}
        </section>
    );
}

export default Stats;