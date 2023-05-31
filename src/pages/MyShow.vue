<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import SingleProject from '../components/SingleProject.vue';

    export default {
        name:'MyShow',
        components: {
            SingleProject
        },
        data() {
            return {
                project: 0,
                store
            }
        },
        mounted() {
            const slug = this.$route.params.slug;
            console.log(slug);
            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response.data);
                this.project = response.data.project;
                
            })
        }
    }
</script>

<template>
    <div class="container">

        <h1>Info Progetto</h1>
        <SingleProject :project="project"></SingleProject>
    </div>
</template>

<script>

</script>