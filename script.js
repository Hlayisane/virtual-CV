/* global IntersectionObserver */
/* eslint-env browser */

(function () {
    "use strict";

    var faders = document.querySelectorAll('.fade-in'),
        appearOptions = {
            threshold: 0.3,
            rootMargin: "0px 0px -50px 0px"
        },
        appearOnScroll;

    appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }
        
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(function (fader) {
        appearOnScroll.observe(fader);
    });
}());







