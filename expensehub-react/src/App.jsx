import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import Dashboard from "./components/Dashboard";

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('expensehub_user');
            if (raw) setUser(JSON.parse(raw));
        } catch (e) {
            // ignore
        }
    }, []);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function showToast(msg) {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(""), 3000);
    }

    return (
        <>
            <Navbar onSignup={openModal} user={user} onLogout={() => setUser(null)} />
            <main>
                {user ? (
                    <Dashboard user={user} />
                ) : (
                    <>
                        <Hero onSignup={openModal} />
                        <Features />
                        <Stats />
                        <Pricing onSignup={openModal} />
                        <Testimonials />
                        <CtaSection onSignup={openModal} />
                    </>
                )}
            </main>
            <Footer />
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                onSuccess={(createdUser) => {
                    // set user, persist, and show dashboard
                    setUser(createdUser);
                    try { localStorage.setItem('expensehub_user', JSON.stringify(createdUser)); } catch (e) {}
                    closeModal();
                    showToast("Account created! Welcome to ExpenseHub 🎉");
                }}
            />
            {toastMsg && <Toast message={toastMsg} />}
        </>
    );
}

export default App;