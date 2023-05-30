<script>
    import axios from 'axios';

    export default {
        name: 'AppMain',
        data() {
            return {
                projects: [],
                contentMaxLenght: 185,
                baseUrl: 'http://127.0.0.1:8000',
                currentPage: 1,
                lastPage: null
            }
        },
        methods: {
            getProjects(goToPage) {
                
                axios.get(`${this.baseUrl}/api/projects`, {
                    params: {
                        page: goToPage
                    }
                }).then(response => {
                    console.log(response);
                })
            }
        },
        mounted() {
            this.getProjects(1);
        }
    }
</script>

<template>

</template>

<style lang="scss" scoped>

</style>