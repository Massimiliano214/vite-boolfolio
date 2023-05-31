<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name:'MyShow',
        data() {
            return {
                store
            }
        },
        mounted() {
            const slug = this.$route.params.slug;
            console.log(slug);
            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response)
            })
        }
    }
</script>

<template>
    <div class="container">

        <h1>Info Progetto</h1>

    </div>
</template>

<script>

</script>