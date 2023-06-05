<script>

  import AppHeader from '../components/AppHeader.vue';
  import MyContactForm from '../components/MyContactForm.vue';

  export default {
    name: 'MyContacts',
    components: {

      AppHeader,
      MyContactForm

    }
  }

</script>

<template>
    <div class="container">
        <h2>Contattaci</h2>
        <MyContactForm></MyContactForm>
    </div>
    
</template>