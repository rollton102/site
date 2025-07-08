'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal');
    const timerDisplay = document.getElementById('timer');
    const popup = document.createElement('div');
    
    popup.classList.add('popup');
    popup.textContent = 'Данные успешно отправлены!';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#7c3aed';
    popup.style.color = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.6)';
    popup.style.zIndex = '9999';
    document.body.appendChild(popup);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);

            modal.classList.remove('hidden');
            form.reset();
        } else {
            alert("Пожалуйста, заполните все поля формы!");
        }
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        const timeLeft = 60 * 60;
        startTimer(timeLeft, timerDisplay);
    };

    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const slides = document.querySelectorAll('.slide');
    let activeSlide = 0;

    function showNextSlide() {
        slides[activeSlide].classList.remove('active');
        activeSlide = (activeSlide + 1) % slides.length;
        slides[activeSlide].classList.add('active');
    }

    function showPrevSlide() {
        slides[activeSlide].classList.remove('active');
        activeSlide = (activeSlide - 1 + slides.length) % slides.length;
        slides[activeSlide].classList.add('active');
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    document.querySelectorAll('a[href^="#"').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});
