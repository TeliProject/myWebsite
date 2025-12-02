// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Video modal
const videoBtns = document.querySelectorAll('.video-btn');
const modal = document.getElementById('video-modal');
const videoPlayer = document.getElementById('video-player');
const closeBtn = document.querySelector('.close');

videoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const videoUrl = btn.getAttribute('data-video');
        videoPlayer.src = videoUrl;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    videoPlayer.src = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
});

// Form submission (placeholder - add your backend)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Add real submission logic here)');
});