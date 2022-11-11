<template>
    <swiper
      :modules="modules"
      :options="swiperOption"
      :slides-per-view="perView"
      :space-between="20"
      :loop="isLoop ?? false"
      :lazy="swiperOption.lazy"
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
      props: {
        perView: Number,
        isLoop: Boolean
      },
      data() {
        return {
          swiperOption: {
            autoHeight: true,
            lazy: {
              loadPrevNext: true,
            }
          }
        }
      },
      setup() {
        return {
          modules: [Lazy],
        };
      },
    };
  </script>