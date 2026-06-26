// =====================
// NAVBAR — scroll shadow + hamburger
// =====================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close mobile menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// =====================
// PLAY BUTTON — video modal
// =====================
const playBtn = document.getElementById("play-video-btn");
const videoModal = document.getElementById("video-modal");
const videoClose = document.getElementById("video-close");
const demoVideo = document.getElementById("demo-video");

if (playBtn && videoModal) {
    playBtn.addEventListener("click", () => {
        videoModal.classList.add("active");
        document.body.style.overflow = "hidden";
        if (demoVideo) {
            demoVideo.play();
        }
    });
}

if (videoClose && videoModal) {
    videoClose.addEventListener("click", () => {
        videoModal.classList.remove("active");
        document.body.style.overflow = "";
        // Pause video
        if (demoVideo) {
            demoVideo.pause();
            demoVideo.currentTime = 0;
        }
    });
}

if (videoModal) {
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove("active");
            document.body.style.overflow = "";
            if (demoVideo) {
                demoVideo.pause();
                demoVideo.currentTime = 0;
            }
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal && videoModal.classList.contains("active")) {
        videoModal.classList.remove("active");
        document.body.style.overflow = "";
        if (demoVideo) {
            demoVideo.pause();
            demoVideo.currentTime = 0;
        }
    }
});

// =====================
// MODAL — open / close / validation
// =====================
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalSubmit = document.getElementById("modal-submit");

function openModal() {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    document.getElementById("input-name").focus();
}

function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    clearErrors();
}

// Open triggers
document.getElementById("open-modal").addEventListener("click", openModal);
document.getElementById("hero-open-modal").addEventListener("click", openModal);
const ctaButton = document.getElementById("cta-open-modal");
if (ctaButton) {
    ctaButton.addEventListener("click", openModal);
}

// Close triggers
modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// =====================
// FORM VALIDATION
// =====================
function clearErrors() {
    document.querySelectorAll(".modal-form input").forEach(i => i.classList.remove("error"));
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

modalSubmit.addEventListener("click", () => {
    clearErrors();

    const name = document.getElementById("input-name");
    const email = document.getElementById("input-email");
    const password = document.getElementById("input-password");

    let valid = true;

    if (name.value.trim().length < 2) {
        name.classList.add("error");
        valid = false;
    }
    if (!validateEmail(email.value.trim())) {
        email.classList.add("error");
        valid = false;
    }
    if (password.value.length < 6) {
        password.classList.add("error");
        valid = false;
    }

    if (!valid) return;

    // Simulate successful signup
    modalSubmit.textContent = "Creating account...";
    modalSubmit.disabled = true;

    setTimeout(() => {
        closeModal();
        modalSubmit.textContent = "Create Account →";
        modalSubmit.disabled = false;
        name.value = "";
        email.value = "";
        password.value = "";
        showToast("Account created! Welcome to ExpenseHub 🎉");
    }, 1400);
});

// =====================
// TOAST NOTIFICATION
// =====================
function showToast(message) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 28px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: #132238;
        color: white;
        padding: 14px 28px;
        border-radius: 100px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 14px;
        font-weight: 600;
        z-index: 9999;
        opacity: 0;
        transition: all 0.35s ease;
        white-space: nowrap;
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(10px)";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// =====================
// SMOOTH SCROLL for nav links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// =====================
// SCROLL REVEAL (Intersection Observer)
// =====================
const revealTargets = document.querySelectorAll(
    ".feature-card, .testimonial-card, .pricing-card, .stat"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    revealObserver.observe(el);
});