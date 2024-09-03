document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageTitle = document.querySelector('#section-title');

    function updateTitle(navText) {
        pageTitle.textContent = `${navText}`;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const navText = this.textContent;
            updateTitle(navText);
        });
    });

})
