<script>
    import axios from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';
    import { store } from '../store.js';

    export default {
        name: 'MyProject',
        data() {
            return {
                projects: [],
                contentMaxLength: 185,
                store,
                currentPage: 1,
                lastPage: null,
                loading: true
            }
        },
        components: {
            ProjectCard,
        },
        methods: {
            getProjects(goToPage) {
                this.loading = true;
                axios.get(`${this.store.baseUrl}/api/projects`, {
                    params: {
                        page: goToPage
                    }
                }).then(response => {
                    console.log(response);
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                });
            },
            truncateContent(content) {
                if (content && content.length > this.contentMaxLength) {
                    return content.substr(0, this.contentMaxLength) + ' .. continua a leggere';
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
    <div class="container">
        <h2>Progetti:</h2>
        <div class="row">
            <div v-if="loading == false" class="col-4" v-for="(project, index) in projects" :key="index">
                <ProjectCard
                :image="`${this.store.baseUrl}/storage/${project.cover_image}`"
                :title="project.title"
                :slug="project.slug"
                :type="project.type?.name"
                :project="project"
                :content="truncateContent(project.content)">

                </ProjectCard>
            </div>
            <div v-else>
                <h2>Attendi</h2>
                <img src="/loader.gif" alt="Caricamento">
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
                <li v-for="page in lastPage" class="page-item"><button class="page-link" @click="getProjects(page)" :class="{'active' : currentPage == page}">{{page}}</button></li>
                <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

</style>