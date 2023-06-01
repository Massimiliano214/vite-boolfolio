<script>    
    export default {
        name: 'ProjectCard',
        props: {
            image: String,
            title: String,
            slug: String,
            type: String,
            technologies: Array,
            content: String,

        }
    }
</script>

<template>
    <div class="card my-4">
        <img v-if="image != 'http://127.0.0.1:8000/storage/null'" :src="image" class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <h5>{{type}}</h5>
            <h5 v-for="technology in technologies">{{technology.name}}</h5>
            <p class="card-text">{{content}}</p>
            <router-link :to="{name: 'project', params: {slug: slug}}" class="btn btn-primary">Apri</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-img-top {
        width: 60%;
        margin: auto;
    }
</style>