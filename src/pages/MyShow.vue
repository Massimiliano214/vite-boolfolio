<script>
    import axios from 'axios';
    export default {
        name:'MyShow',
        mounted() {
            const slug = this.$route.params.slug;
            console.log(slug);
        }
    }
</script>

<template>
    <div class="contianer">

        <h1>Info Progetto</h1>
        
    </div>
</template>

<script>

</script>