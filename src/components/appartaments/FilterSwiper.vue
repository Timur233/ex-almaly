<template>
    <swiper
        :autoplay="false"
        :slides-per-view="1"
        :space-between="0"
    >
        <slot></slot>
    </swiper>
  </template>
  <script>
    import { Swiper } from 'swiper/vue';
  
    export default {
      components: {
        Swiper
      },
    };
  </script>