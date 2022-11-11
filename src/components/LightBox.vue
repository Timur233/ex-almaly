<template>
    <FsLightbox
        :toggler="toggler"
        :sources="sources"
    />
</template>

<script>
    import FsLightbox from 'fslightbox-vue/v3';

    export default {
        components: {
            FsLightbox
        },
        data() {
            return {
                toggler: false,
                sources: null,
            }
        },
        methods: {
            show(sources) {
                this.sources = sources;
                this.toggler = true;
            },
        }
    };
</script>