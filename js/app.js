(function() {
    const count_btn = document.querySelectorAll('.counter-btn');
    let count = 0;
    count_btn.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('next-count')) {
                count++;
            } else if (button.classList.contains('prev-count')) {
                count--;
            }
            const counter = document.querySelector('.counter');
            counter.textContent = count;
            if (count > 0) {
                counter.style.color = 'green';
            } else if (count < 0) {
                counter.style.color = 'red';
            } else {
                counter.style.color = 'black';
            }
        });
    });
})();