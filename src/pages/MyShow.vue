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
            const slug = this.$route.params.slug; //rotta scritta dopo lo / nel browser
            console.log(slug);
            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                if (response.data.success == true) {
                    console.log(response.data);
                    this.project = response.data.project;
                } else {
                    this.$router.push({name: 'notFound'});
                }
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