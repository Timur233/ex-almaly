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
import FormModal from './components/FormModal.vue';
import FilterAppartaments from './components/FilterAppartaments.vue';
import YandexMap from './components/YandexMap.vue';
import Modal from './components/base-components/Modal.vue';
import FsSource from './components/base-components/FsSource.vue';

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
            YandexMap,
            Modal,
            FormModal,
            FsSource,
        },
        data() {
            return {
                paralaxEffect:      {},
                callbackModalShow:  false,
                callbackResultShow: false,
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

            const isBuildingStepBox = ref(false);
            const buildingStepSource = ref(null);

            const showLightBox = (sources, isPanorama = false) => {
                if (isPanorama) {
                    app.provide('buildingStepUrl', sources);

                    buildingStepSource.value = [FsSource];
                    isBuildingStepBox.value = !isBuildingStepBox.value;
                } else {
                    sourcesLightbox.value = sources;
                    isLightbox.value = !isLightbox.value;
                }
            };

            return {
                isLightbox,
                sourcesLightbox,
                isBuildingStepBox,
                buildingStepSource,
                showLightBox,
            };
        },
    });

    app.mount('#app');
};
