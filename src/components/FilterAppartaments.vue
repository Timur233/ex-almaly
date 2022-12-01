<template>
    <div class="flex appartaments__flex">
        <div class="flex__3 appartaments__filter flats-filter">
            <div class="section__title-block" v-if="sectionTitle && sectionTitle !== ''">
                <h2 class="section__title">{{ sectionTitle }}</h2>
            </div>

            <filter-buttons 
                :rooms="filteredRooms"
                :floors="filteredFloors"
                :square="filteredSquare"
                @filter-offers="
                    (params) => filterOffers(params.prop, params.value)
                "
                @clear-filter="clearFilter()"
            >
                <template v-slot:roomslabel>Выберите количество комнат</template>
                <template v-slot:floorslabel>Выберите этаж</template>
                <template v-slot:squarelabel>Выберите площадь, м<sup>2</sup></template>
            </filter-buttons>
        </div>
        <div class="flex__6 appartaments__flats flats-swiper">
            <filter-swiper>
                <swiper-slide 
                    class="flats-swiper__item" 
                    v-for="item in filteredAppartaments" 
                    :key="item._id"
                >
                    <img :src="item.plan" :alt="item.title">
                </swiper-slide>
            </filter-swiper>
        </div>
        <div class="flex__3 appartaments__info">
            <slot></slot>
        </div> 
    </div>

    <Teleport to="body">
        <modal :is-show="showFlatsPayModal" @closeModal="closeModal">
            <div class="flats-pay__info">123</div>
        </modal>
    </Teleport>
</template>

<script>
    import FilterButtons from './appartaments/FilterButtons.vue';
    import FilterSwiper from './appartaments/FilterSwiper.vue';
    import { SwiperSlide } from 'swiper/vue';
    import Modal from './base-components/Modal.vue';

    export default {
        components: {
            FilterButtons,
            FilterSwiper,
            SwiperSlide,
            Modal,
        },
        data() {
            return {
                selectedParams: {
                    rooms: null,
                    floors: null,
                    square: null
                },
                appartaments: [],
                buttons: {
                    rooms: [],
                    floors: [],
                    square: [],
                },
                showFlatsPayModal: false,
            }
        },
        props: {
            sectionTitle: String
        },
        mounted() {
            this.getAppartaments()
                .then((res) => {
                    if (!!res?.total && res.total > 0) {
                        this.generateButtons(res.entries);
                        this.generateAppartaments(res.entries);
                        this.setDefaultParams();

                        return;
                    }

                    throw "Возникла ошибка с получением данных";
                })
                .catch(e => {
                    console.log(e);
                });

            this.showPayInfo();
        },
        computed: {
            filteredAppartaments() { 
                return this.appartaments.filter((offer) => {
                    const rooms = this.selectedParams.rooms 
                        ? offer.rooms == this.selectedParams.rooms 
                        : true; 
                    const floors = this.selectedParams.floors 
                        ? offer.floors.includes(this.selectedParams.floors)
                        : true; 
                    const square = this.selectedParams.square 
                        ? offer.square == this.selectedParams.square 
                        : true; 

                    return rooms && floors && square;
                });
            },
            filteredRooms() {
                return this.buttons.rooms.map(item => Object({
                    value: item,
                    selected: item == this.selectedParams.rooms,
                }));
            },
            filteredFloors() {
                const available = [];
                    
                this.filteredAppartaments.map((item) => available.push(...item.floors));

                return this.buttons.floors.filter(item => available.includes(item))
                    .map(item => Object({
                        value: item,
                        selected: item == this.selectedParams.floors,
                    }));
            },
            filteredSquare() {
                const available = this.filteredAppartaments.map((item) => item.square);
                    
                return this.buttons.square.filter(item => available.includes(item))
                    .map(item => Object({
                        value: item,
                        selected: item == this.selectedParams.square,
                    }));
            },
        },  
        methods: {
            getAppartaments() {
                const host = new URL('filter', document.location.href);

                return fetch(host, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => res.json());
            },
            generateButtons(entries) {
                const filterRooms = new Set();
                const filterSquare = new Set();
                const filterFloors = new Set();
                const sotrFn = (a, b) => a - b;

                entries.forEach((entry) => {
                    filterRooms.add(Number(entry.rooms));
                    filterSquare.add(Number(entry.square));

                    entry.floors.forEach((floor) => {
                        filterFloors.add(Number(floor));
                    });
                });

                this.buttons.rooms = Array.from(filterRooms).sort(sotrFn);
                this.buttons.square = Array.from(filterSquare).sort(sotrFn);
                this.buttons.floors = Array.from(filterFloors).sort(sotrFn);
            },
            generateAppartaments(entries) {
                this.appartaments = entries.map(item => Object({
                    id:     item._id,
                    title:  item.title,
                    rooms:  Number(item.rooms),
                    floors: item.floors.map(floor => Number(floor)),
                    square: Number(item.square),
                    plan:   `https://cms.abpx.kz${item.plan.path}`,
                }));
            },
            setDefaultParams() {
                this.selectedParams.rooms = this.filteredRooms[0].value;
                this.selectedParams.floors = this.filteredFloors[0].value;
                this.selectedParams.square = this.filteredSquare[0].value;
            },
            filterOffers(prop, value) {
                this.selectedParams[prop] = value;
            },
            clearFilter() {
                this.selectedParams.floors = null;
                this.selectedParams.square = null;
            },
            showPayInfo() {
                const flatsItems = document.querySelectorAll('.flats-pay__item');

                flatsItems.forEach(item => {
                    const content = item.querySelector('.flats-pay__hidden');

                    item.addEventListener('click', () => {
                        this.showFlatsPayModal = true;
                    })
                });
            },
            closeModal() {
                this.showFlatsPayModal = true;
            }
        }
    }
</script>