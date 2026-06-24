function Dashboard({ user }) {
    return (
        <section className="dashboard">
            <div className="section-label">Dashboard</div>
            <h2 className="section-title">Welcome back, {user?.name || 'Friend'}!</h2>
            <p className="lead">Here's your personal overview — quick stats and recent activity.</p>

            <div className="dashboard-grid">
                <div className="card">
                    <h3>Monthly spend</h3>
                    <p className="big">₹12,430</p>
                </div>
                <div className="card">
                    <h3>Savings progress</h3>
                    <p className="big">42%</p>
                </div>
                <div className="card">
                    <h3>Active budgets</h3>
                    <p className="big">3</p>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
