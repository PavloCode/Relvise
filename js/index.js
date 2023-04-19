'use strict';
(() => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function(e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };


    const array = ['./img/helmet/1.jpg', './img/helmet/2.jpg', './img/helmet/3.jpg', './img/helmet/4.jpg', './img/helmet/5.jpg',
        './img/helmet/6.jpg', './img/helmet/7.jpg', './img/helmet/8.jpg', './img/helmet/9.jpg', './img/helmet/10.jpg', './img/helmet/11.jpg',
        './img/helmet/12.jpg', './img/helmet/13.jpg', './img/helmet/14.jpg', './img/helmet/15.jpg', './img/helmet/16.jpg', './img/helmet/17.jpg',
        './img/helmet/18.jpg', './img/helmet/19.jpg', './img/helmet/20.jpg', './img/helmet/21.jpg', './img/helmet/22.jpg', './img/helmet/23.jpg',
        './img/helmet/24.jpg', './img/helmet/25.jpg', './img/helmet/26.jpg', './img/helmet/27.jpg', './img/helmet/28.jpg', './img/helmet/29.jpg',
        './img/helmet/30.jpg', './img/helmet/31.jpg', './img/helmet/32.jpg', './img/helmet/33.jpg', './img/helmet/34.jpg', './img/helmet/35.jpg',
        './img/helmet/36.jpg'
    ];
    let count = -1;
    const img = document.querySelector('.image');
    img.src = array[0];

    setInterval(function() {
        if (count < array.length - 1) {
            count += 1;
            img.src = array[count];
        } else {
            count = 0;
            img.src = array[count];
        }
    }, 55);


    // select the element
    const counters = document.querySelectorAll('.counter');

    // iterate through all the counter elements

    const speed = 10;

    function animatedNumbers() {
        counters.forEach(counter => {
            // function to increment the counter
            function updateCount() {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerHTML;

                const inc = Math.floor((target - count) / 100);

                if (count < target && inc > 0) {
                    counter.innerHTML = (count + inc);
                    // repeat the function
                    setTimeout(updateCount, speed);
                }
                // if the count not equal to target, then add remaining count
                else {
                    counter.innerHTML = target;
                }
            }
            updateCount();
        });
    }






    const elem = document.getElementById('counter');
    document.addEventListener('scroll', onScroll);

    function onScroll() {
        const posTop = elem.getBoundingClientRect().top;

        // documentation
        //1
        // section on the top screnn
        // elem.classList.toggle('visible', posTop <= 0);
        //2
        // section in the bottom
        // elem.classList.toggle('visible', posTop < window.innerHeight);
        //3
        // full section is displayed
        // elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
        //desktop
        if (posTop + elem.clientHeight <= window.innerHeight && posTop >= 0) {

            animatedNumbers();
            document.removeEventListener('scroll', onScroll);
        }
        //mobile
        if (elem.clientHeight >= 290 && window.innerHeight >= 290 && posTop <= 230) {
            animatedNumbers();
            document.removeEventListener('scroll', onScroll);
        }
    };




})();