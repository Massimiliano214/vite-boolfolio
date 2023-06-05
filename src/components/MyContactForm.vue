<script>

    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'MyContactForm',
        data() {
            return {
                store,
                success:false,
                sending:false,
                name: '',
                email: '',
                message: '',
                errors: {}
            }
        },
        methods: {
            sendMsg() {
                this.success = false;
                this.sending  = true;
                this.errors = {};

                const payload = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                axios.post(`${this.store.baseUrl}/api/contacts`, payload)
                .then(response => {
                    
                    if (response.data.success) {

                        this.success = true;

                        this.name = '';
                        this.email = '';
                        this.message = '';
                    } else {

                        this.errors = response.data.errors;

                    }

                    this.sending = false;

                }).catch(error => {
                    this.sending = false;
                    console.log(error);
                });
            }
        }
    }
</script>

<template>

    <div v-if="success" class="alert alert-success" role="alert">Messaggio inviato.</div>

    <form @submit.prevent="sendMsg()">
        <div class="mb-3">
            <label for="name" class="form-label">Nome:</label>
            <input type="name" class="form-control" id="name" :class="{'is-invalid': errors.name}" v-model="name">
            <div class="invalid-feedback" v-for="error in errors.name">
                {{ error }}
            </div>
        </div>
        
        <div class="mb-3">
            <label for="email" class="form-label">E-Mail:</label>
            <input type="email" class="form-control" id="email" :class="{'is-invalid': errors.email}" v-model="email">
            <div class="invalid-feedback" v-for="error in errors.email">
                {{ error }}
            </div>
        </div>

        <div class="mb-3">
            <label for="name">Messaggio:</label>
            <textarea class="form-control" :class="{'is-invalid': errors.message}" id="message" v-model="message"></textarea>
            <div class="invalid-feedback" v-for="error in errors.message">
                {{ error }}
            </div>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="sending">
            {{sending?'Inviando..':'Contattaci'}}
        </button>
    </form>
</template>

<style lang="scss" scoped>

</style>