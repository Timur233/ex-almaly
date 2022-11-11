<template>
    <div class="appartaments__filter-block filter-block" v-if="rooms">
        <label class="filter-block__label">
            <slot name="roomslabel"></slot>
        </label>
        <div class="filter-block__buttons">
            <button 
                class="btn btn--inner-shadow btn--filter-big" 
                :key="button.value"
                v-for="button in rooms"
                :class="{'active': button.selected}"
                @click.prevent="selectRooms(button.value)"
            >
                {{ button.value }}
            </button>
        </div>
    </div>

    <div class="appartaments__filter-block filter-block" v-if="floors">
        <label class="filter-block__label">
            <slot name="floorslabel"></slot>
        </label>
        <div class="filter-block__buttons">
            <button 
                class="btn btn--inner-shadow" 
                :key="button.value"
                v-for="button in floors"
                :class="{'active': button.selected}"
                @click.prevent="selectFloors(button.value)"
            >
                {{ button.value }}
            </button>
        </div>
    </div>

    <div class="appartaments__filter-block filter-block" v-if="square">
        <label class="filter-block__label">
            <slot name="squarelabel"></slot>
        </label>
        <div class="filter-block__buttons">
            <button 
                class="btn btn--inner-shadow" 
                :key="button.value"
                v-for="button in square"
                :class="{'active': button.selected}"
                @click.prevent="selectSquare(String(button.value))"
            >
                {{ button.value }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            rooms: Array,
            floors: Array,
            square: Array,
        },
        emits: ['filterOffers', 'clearFilter'],
        methods: {
            selectRooms(value) {
                this.$emit('filterOffers', { prop: 'rooms', value });
                this.$emit('clearFilter');
            },
            selectFloors(value) {
                this.$emit('filterOffers', { prop: 'floors', value });
            },
            selectSquare(value) {
                this.$emit('filterOffers', { prop: 'square', value });
            },
        },
    }
</script>