<script>

  import AppHeader from '../components/AppHeader.vue';

  export default {
    name: 'MyContacts',
    components: {

      AppHeader

    }
  }

</script>

<template>
    <div class="container">
        <h2>Lista contatti</h2>
        <ul>
            <li v-for="i in 10">
                Lorem ipsum dolor sit amet.
            </li>
        </ul>
    </div>
    
</template>