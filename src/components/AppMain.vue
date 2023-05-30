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
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                });
            },
            truncateContent(content) {
                if (content && content.length > this.contentMaxLength) {
                    return content.substr(0, this.contentMaxLenght) + ' .. continua a leggere';
                }
                return content;
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