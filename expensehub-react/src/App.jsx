import { useState } from "react";
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

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

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
            <Navbar onSignup={openModal} />
            <main>
                <Hero onSignup={openModal} />
                <Features />
                <Stats />
                <Pricing onSignup={openModal} />
                <Testimonials />
                <CtaSection onSignup={openModal} />
            </main>
            <Footer />
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                onSuccess={() => {
                    closeModal();
                    showToast("Account created! Welcome to ExpenseHub 🎉");
                }}
            />
            {toastMsg && <Toast message={toastMsg} />}
        </>
    );
}

export default App;