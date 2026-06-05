const signupBtn = document.querySelector(".signup-btn");
signupBtn.addEventListener("click", () => {
    alert("Sign Up Feature Coming Soon!");
});

const heroBtn = document.querySelector(".hero-btn");
heroBtn.addEventListener("click", () => {
    console.log("Hero Button Clicked");
});

const dashboard = 
document.querySelector(".dashboard-img");

dashboard.addEventListener("mouseover", () => {
    dashboard.style.transform =
    "scale(1.03)";
});

dashboard.addEventListener("mouseout", () => {
    dashboard.style.transform = 
    "scale(1)";
});