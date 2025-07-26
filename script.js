const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-nav');
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');

    let valid = true;

    const name = this.fullname.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name) {
        nameError.classList.remove('hidden');
        valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailError.classList.remove('hidden');
        valid = false;
    }

    if (!message) {
        messageError.classList.remove('hidden');
        valid = false;
    }

    if (valid) {

        const successMessage = document.createElement('div');
        successMessage.textContent = 'Form submitted successfully! I will get back to you soon.';
        successMessage.className = 'text-green-500 mt-4 text-sm text-center';

        const existingSuccess = this.querySelector('.text-green-500');
        if (existingSuccess) {
            existingSuccess.remove();
        }

        this.appendChild(successMessage);

        setTimeout(() => {
            this.reset();
            successMessage.remove();
        }, 3000);
    }
});
document.getElementById('year').textContent = new Date().getFullYear();