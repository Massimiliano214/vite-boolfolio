<script>    
    export default {
        name: 'ProjectCard',
        props: {
            image: String,
            title: String,
            type: String,
            technology: String,
            content: String,

        }
    }
</script>

<template>
    <div class="card">
        <img :src="image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <h5>{{type}}</h5>
            <h5>{{technology}}</h5>
            <p class="card-text">{{content}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>