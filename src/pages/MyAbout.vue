<script>

  import AppHeader from '../components/AppHeader.vue';

  export default {
    name: 'MyAbout',
    components: {

      AppHeader

    }
  }

</script>

<template>
    <div class="container">
        <h2>info</h2>
        <ul>
            <li v-for="i in 10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, velit.
            </li>
        </ul>
    </div>
    
</template>