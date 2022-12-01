<template>
    <transition class="modal__slide-fade" name="slide-fade">
        <div 
            v-if="isShow" 
            class="modal" 
        >
            <button class="modal__close-btn" @click="$emit('closeModal')">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_76_33)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="
                            M0.15976 0.15976C0.372773 -0.0532533 0.718136 -0.0532533 
                            0.931149 0.15976L6 5.22861L11.0689 0.15976C11.2819 -0.0532533 
                            11.6272 -0.0532533 11.8402 0.15976C12.0533 0.372773 12.0533 
                            0.718136 11.8402 0.931149L6.77139 6L11.8402 11.0689C12.0533 
                            11.2819 12.0533 11.6272 11.8402 11.8402C11.6272 12.0533 11.2819 
                            12.0533 11.0689 11.8402L6 6.77139L0.931149 11.8402C0.718136 
                            12.0533 0.372773 12.0533 0.15976 11.8402C-0.0532533 11.6272 
                            -0.0532533 11.2819 0.15976 11.0689L5.22861 6L0.15976 
                            0.931149C-0.0532533 0.718136 -0.0532533 0.372773 0.15976 0.15976Z
                        " fill="#fff"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_76_33">
                            <rect width="12" height="12" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div class="modal__content">
                <div class="container">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
    <transition class="modal__overlay-fade" name="fade">
        <div v-if="isShow" class="modal__overlay">
            <img 
                class="section__paralax modal__paralax modal__paralax--primary" 
                src="https://cms.abpx.kz/storage/uploads/2022/10/19/634fda74b60e6order-img-3.svg"
            >
            <img 
                class="section__paralax modal__paralax modal__paralax--second" 
                src="https://cms.abpx.kz/storage/uploads/2022/10/20/63512b3579128order-img-1.svg"
            >
            <img 
                class="modal__paralax modal__paralax--third" 
                src="https://cms.abpx.kz/storage/uploads/2022/11/08/636a4d8826e56order-img-2.svg"
            >

            <img 
                src="https://cms.abpx.kz/storage/uploads/2022/11/14/637209b449ce5order-logo.svg" 
                class="modal__logo modal__paralax"
            >
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            isShow: Boolean
        },
        emits: ['closeModal']
    }
</script>