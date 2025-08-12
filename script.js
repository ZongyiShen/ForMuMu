document.addEventListener('DOMContentLoaded', () => {
    const heartBtn = document.getElementById('heartBtn');

    if (heartBtn) {
        heartBtn.addEventListener('click', () => {
            // 你可以在這裡放任何你想給她驚喜的訊息
            alert('❤️');
        });
    }
});