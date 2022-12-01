<template>

    <div class="form-result" v-if="showResult">
        <slot></slot>
    </div>

    <div class="section__title-block callback-h__title-block" v-if="!showResult">
        <h2 class="section__title section__title--gold">
            Оставьте заявку и наш менеджер<br> 
            обязательно с вами свяжется
        </h2>
    </div>

    <div class="flex" v-if="!showResult">
        <div class="flex__8">
            <callback-form class="callback-h__form"
                :user-name-placeholder="userNamePlaceholder"
                :no-valid-phone-number="noValidPhoneNumber"
                :no-valid-form-data="noValidFormData"
                :submit-text="submitText"
                @show-form-result="showResult = true"
            ></callback-form>
        </div>
    </div>

</template>

<script>
    import CallbackForm from './CallbackForm.vue';

    export default {
        components: {
            CallbackForm
        },
        props: {
            userNamePlaceholder: String,
            noValidPhoneNumber:  String,
            noValidFormData:     String,
            submitText:          String,
        },
        data() {
            return {
                showResult: false,
            }
        }
    }
</script>   