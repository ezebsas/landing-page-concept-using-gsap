gsap.to(".loading-screen",4, { 
    delay: 6.6,
    top: "-110%",
    ease: 'Expo.easeInOut'
});

gsap.from(".logo", 3, { 
    delay: 8.4,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from(".contact", 3, { 
    delay: 8.5,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

/*
gsap.from(".options", 3, { 
    delay: 8.6,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});
*/

gsap.from(".bottom-text", 3, { 
    delay: 8.7,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from(".copyright", 3, { 
    delay: 8.9,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from(".media ul li", 2, { 
    delay: 8.7,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut',
    stagger: 0.1
});

gsap.from(".menu", 3, { 
    delay: 8.8,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from(".p1", 3, { 
    delay: 9,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from(".p2", 3, { 
    delay: 9.2,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from("#one", 3, { 
    delay: 9.4,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

gsap.from("#two", 3, { 
    delay: 9.6,
    opacity: 0,
    y: 20, 
    ease: 'Expo.easeInOut'
});

var t1 = gsap.timeline();

t1.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    y:400,
    ease: "Expo.easeInOut"
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y:400,
    ease: "Expo.easeInOut"
}, "-=5").to(".ringOne", 4, {
    delay: 0.4,
    x: 400, 
    ease: "Expo.easeInOut"
}).to(".ringTwo", 4, {
    delay: 0.9,
    x: 400, 
    ease: "Expo.easeInOut"
}, "-=5")

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g,
"<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i){
        return 9000 + 50*i
    }
});