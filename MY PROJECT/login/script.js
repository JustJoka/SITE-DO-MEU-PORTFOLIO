document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn-login');

    if(btn) {
        btn.type = 'button';
        btn.addEventListener('click', () => {
            window.location.href = 'main.html';
        });
    }
});