document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn-register');

    if(btn) {
        btn.type= 'button';
        btn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});