import { ref, computed } from 'vue';

export default function useParalax(paramsList) {
    const paralaxSpeed = ref(0);
    const pageOffset = ref(window.pageYOffset);
    const windowHeight = window.innerHeight;

    const createParalax = (start, end, el) => computed(() => {
        const sizes = {
            top:    el.offsetTop,
            bottom: el.offsetTop + el.offsetHeight,
            height: el.offsetHeight,
        };
        const onePercent = (end - start) / 100;
        const passed = pageOffset.value - sizes.top;
        const translateY = (passed / (windowHeight / 100)) * onePercent;

        if (sizes.bottom > pageOffset.value && sizes.top < (pageOffset.value + windowHeight)) {
            return `translate3d(0px, ${translateY}%, 0px)`;
        }

        return `translate3d(0px, ${start}%, 0px)`;
    });

    const initEffects = () => paramsList.reduce((accum, current) => {
        accum[current.name] = createParalax(current.start, current.end, current.el);

        return accum;
    }, {});

    const handScroll = () => {
        pageOffset.value = window.pageYOffset;
        paralaxSpeed.value = (window.pageYOffset / (windowHeight / 100)) / 2;
    };

    (() => {
        window.addEventListener('scroll', handScroll);
    })();

    const destroyParalax = () => {
        window.removeEventListener('scroll', handScroll);
    };

    return {
        offset:  pageOffset,
        paralax: initEffects(),
        destroy: destroyParalax,
    };
}
