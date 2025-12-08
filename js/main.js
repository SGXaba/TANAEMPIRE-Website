document.addEventListener('DOMContentLoaded', () => {
    // Highlight active page
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });

    // Contact form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you. Your message has been sent to TANA Empire.');
            form.reset();
        });
    }
});