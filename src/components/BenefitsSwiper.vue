<template>
    <swiper
        :autoplay="true"
        :slides-per-view="1"
        :space-between="0"
    >
        <slot></slot>
    </swiper>
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    export default {
      components: {
        Swiper, SwiperSlide
      },
    };
  </script>