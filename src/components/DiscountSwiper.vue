<template>
    <swiper
        :modules="modules"
        :autoplay="true"
        :slides-per-view="1"
        :space-between="20"
        :lazy="true"
        :auto-height="true"
    >
        <slot></slot>
    </swiper>
  </template>
  <script>
    import { Lazy } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    export default {
      components: {
        Swiper, SwiperSlide
      },
      setup() {
        return {
          modules: [Lazy],
        };
      },
    };
  </script>