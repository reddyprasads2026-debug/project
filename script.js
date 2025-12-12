// Reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});
reveals.forEach(r => observer.observe(r));

// Theme toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.classList.toggle('bi-sun-fill');
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("message");

    if(name.value.trim() === ""){
        document.getElementById("errName").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errName").style.display = "none";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        document.getElementById("errEmail").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errEmail").style.display = "none";
    }

    if(msg.value.trim().length < 10){
        document.getElementById("errMessage").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errMessage").style.display = "none";
    }

    if(valid){
        document.getElementById("formSuccess").style.display = "block";
        this.reset();

        setTimeout(() => {
            document.getElementById("formSuccess").style.display = "none";
        }, 3000);
    }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

