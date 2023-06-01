<script>
    import { store } from '../store.js';

    export default {
        name: 'SingleProject',
        props: ['project'],
        data() {
            return {
                store
            }
        }
    };
</script>

<template>
    <div class="card">
        <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <h5>{{project.type?.name}}</h5>
            <h5 v-for="technology in project.technologies">{{technology?.name}}</h5>
            <p class="card-text">{{project.content}}</p>
            <router-link :to="{name: 'project', params: {slug: 'mio-project'}}" class="btn btn-primary">
            Vedi Post mio project
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-img-top {
        width: 50px;
    }
</style>