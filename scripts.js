// script.js
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');

        button.addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            const icon = button.querySelector('.icon');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                button.classList.remove('active');
            } else {
                document.querySelectorAll('.accordion-content').forEach(content => content.style.maxHeight = null);
                document.querySelectorAll('.accordion-button').forEach(button => button.classList.remove('active'));

                content.style.maxHeight = content.scrollHeight + 'px';
                button.classList.add('active');
            }
        });
    });
});
