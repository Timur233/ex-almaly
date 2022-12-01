<template>
    <yandex-map :settings="settings" :coords="coords" :zoom="11">
        <ymap-marker 
            :coords="[43.32243379255268,77.02063774551982]" 
            marker-id="1" 
            :icon="complexIcon"
            :balloon-template="'<div>Отдел продаж <br> Altyn City</div>'"
        />
        <ymap-marker 
            :coords="[43.24969307453012,76.94830399999995]" 
            marker-id="4" 
            :icon="exclusiveIcon"
            :balloon-template="'<div>Центральный офис продаж</div>'"
        />
        <ymap-marker 
            marker-id="2" 
            marker-type="Polygon" 
            :coords="[ [coords, coords], polygon ]" 
            :marker-fill="{color: '#cfa36a'}"
            :marker-stroke="{color: '#cfa36a'}"
        ></ymap-marker>
    </yandex-map>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps';
    
    export default {
        components: {
            yandexMap,
            ymapMarker,
        },
        data() {
            return {
                coords: [43.321743, 77.022114],
                polygon: [
                    [43.321743, 77.022114], 
                    [43.317571, 77.018613], 
                    [43.317816, 77.018227], 
                    [43.319289, 77.01744], 
                    [43.319791, 77.017552], 
                    [43.320154, 77.017536], 
                    [43.320341, 77.017263], 
                    [43.320796, 77.017279], 
                    [43.321135, 77.017215], 
                    [43.321287, 77.017055], 
                    [43.322234, 77.017151], 
                    [43.322666, 77.01691], 
                    [43.323858, 77.017231], 
                    [43.324349, 77.016765], 
                    [43.324957, 77.017071], 
                    [43.321743, 77.022114]
                ],
                settings: {
                    apiKey: 'c931e95f-6835-4672-9786-8ec02a9db87a',
                    lang: 'ru_RU',
                    version: '2.1'
                },
                complexIcon: {
                    layout: 'default#image',
                    imageHref: 'https://cms.abpx.kz/storage/uploads/2022/11/30/63874e8ce5d4fExclude.svg',
                    imageSize: [55, 90],
                    imageOffset: [-27.5, -90],
                },
                exclusiveIcon: {
                    layout: 'default#image',
                    imageHref: 'https://cms.abpx.kz/storage/uploads/2022/11/30/63874e8b50943mapmarker.svg',
                    imageSize: [55, 90],
                    imageOffset: [-27.5, -90],
                },
            }
        }
    }
</script>