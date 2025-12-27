// Scroll animation for highlight cards
const cards = document.querySelectorAll('.highlight-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.8s ease';
  observer.observe(card);
});

// Skill bar animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.getAttribute('data-progress');
      entry.target.style.width = progress + '%';
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Contact Form Handling (No Backend)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').classList.add('d-none');
    submitBtn.querySelector('.btn-loading').classList.remove('d-none');

    setTimeout(() => {
      formMessage.classList.remove('d-none', 'alert-danger');
      formMessage.classList.add('alert-success');
      formMessage.textContent = '✅ Message sent successfully! I will get back to you soon.';

      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').classList.remove('d-none');
      submitBtn.querySelector('.btn-loading').classList.add('d-none');
    }, 1500);
  });
}
