// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
            item.style.transition = 'transform 0.5s ease';
            item.style.transform = isVisible ? 'rotateX(0)' : 'rotateX(10deg)'; /* Newspaper opening effect */
        });
    });
});
