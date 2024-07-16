document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');

            const month = this.getAttribute('data-month');
            const activeContent = document.getElementById(month);

            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});
