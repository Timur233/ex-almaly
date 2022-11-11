/* eslint-disable import/no-unresolved */
import { createApp, ref } from 'vue';
import { SwiperSlide } from 'swiper/vue';
import FsLightbox from 'fslightbox-vue/v3';
import 'swiper/css';
import 'swiper/css/lazy';

// components
import DiscountSwiper from './components/DiscountSwiper.vue';
import CarouselSwiper from './components/CarouselSwiper.vue';
import BenefitsSwiper from './components/BenefitsSwiper.vue';
import CallbackForm from './components/CallbackForm.vue';
import FilterAppartaments from './components/FilterAppartaments.vue';

import useInitParalax from './hooks/initParalax';

window.onload = () => {
    const app = createApp({
        components: {
            DiscountSwiper,
            SwiperSlide,
            CarouselSwiper,
            BenefitsSwiper,
            FsLightbox,
            CallbackForm,
            FilterAppartaments,
        },
        data() {
            return {
                paralaxEffect: {},
            };
        },
        mounted() {
            this.paralaxEffect = useInitParalax(this.$refs);
        },
        unmounted() {
            this.paralaxEffect.destroy();
        },
        computed: {
            headerIsSticky() {
                return this.paralaxEffect.offset > 60;
            },
        },
        setup() {
            const isLightbox = ref(false);
            const sourcesLightbox = ref([]);

            const showLightBox = (sources) => {
                isLightbox.value = !isLightbox.value;
                sourcesLightbox.value = sources;
            };

            return {
                isLightbox,
                sourcesLightbox,
                showLightBox,
            };
        },
    });

    app.mount('#app');
};
