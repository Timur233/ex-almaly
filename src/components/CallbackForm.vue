<template>
    <form action="#">
        <div class="flex">
            <div class="input-group input-group--colspan flex__8 flex">
                <div class="input-group flex__col">
                    <input 
                        type="text" 
                        class="input-group__input" 
                        name="name" 
                        :placeholder="userNamePlaceholder"
                        v-model="this.form.name"
                    >
                </div>

                <div class="input-group flex__col">
                    <input 
                        type="text" 
                        class="input-group__input" 
                        name="phone"  
                        required="required"
                        placeholder="+7 ___ ___ __ __"
                        v-model="this.form.phone"
                        @input="clearMessages"
                    >
                </div>
            </div>

            <div class="input-group flex__col">
                <button 
                    class="btn btn--gradient" 
                    @click.prevent="sendForm"
                >
                    <span v-if="!isLoad">{{ submitText }}</span>
                    <span v-else>Загрузка</span>
                </button>
            </div>
        </div>
        <div class="form__error" v-if="this.showMessage">
            {{ noValidFormData }}
        </div>
        <div class="form__warning" v-else-if="!this.form.isPhoneValid">
            {{ noValidPhoneNumber }}
        </div>
    </form>
</template>

<script>
import useForm from '../hooks/form';
import useUserData from '../hooks/userData';

export default {
    data() {
        return {
            form: {
                phone: null,
                name: null,
                isPhoneValid: null,
                isValid: null,
            },
            isLoad: false,
            showMessage: false,
            userData: null,
        }
    },
    props: {
        userNamePlaceholder: String,
        noValidPhoneNumber:  String,
        noValidFormData:     String,
        submitText:          String,
    }, 
    mounted() {
        this.form = useForm();
        this.userData = useUserData();
    },
    methods: {
        formRequest(formData) {
            return fetch('./form/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formData)
            })
        },
        sendForm() {
            if (this.form.isValid) {
                this.isLoad = true;

                this.formRequest({
                    userName: {
                        name: 'Имя',
                        data: this.form.name || 'Не указано'
                    },
                    userPhone: {
                        name: 'Телефон',
                        data: this.form.phone
                    },
                    ...this.userData
                })
                    .then(res => {
                        console.log(res);
                        if (res.status === 200) {
                            this.form.name = '';
                            this.form.phone = '';

                            this.$emit('showFormResult');
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    })
                    .finally(() => {
                        this.isLoad = false;
                    });
                return;
            }

            this.showMessage = true;
            
            return;
        },
        clearMessages() {
            this.showMessage = false;
            
            return;
        }
    }
}
</script>