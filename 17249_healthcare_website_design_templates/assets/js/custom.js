let config1 = {
    type: 'carousel',
    perView: 3,
    animationTimingFunc:'ease',
    breakpoints: {
        991: {
            perView:2
        },
        767:{
            perView:1
        }
    }
};

new Glide('._shot_slider', config1).mount();

let config2 = {
    type: 'carousel',
    perView: 1,
    animationTimingFunc:'ease',
    breakpoints: {
    }
};

new Glide('._overview_slider', config2).mount();