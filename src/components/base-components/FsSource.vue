<template>
    <iframe 
        class="building-steps__frame"
        :src="url"
        :v-if="url !== null"
        frameBorder="0" 
        allow="autoplay; fullscreen" 
        allowFullScreen 
    />
</template>

<script>
import { inject } from '@vue/runtime-core'
    export default {
        data() {
            return {
                url: null
            }
        },
        mounted() {
            this.url = inject('buildingStepUrl');
        }
    }
</script>