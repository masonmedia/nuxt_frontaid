<template>
<div class="">
    <!-- As a link -->
    <nav class="navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">Navbar</NuxtLink>
        <b-button variant="outline-dark" v-b-toggle.sidebar-right>
          menu
        </b-button>

    </div>
    </nav>
<!-- offcanvas -->
   
    <b-sidebar id="sidebar-right" title="Sidebar" right backdrop shadow>
      <div class="d-flex flex-column px-3 py-2">
        <router-link 
        v-for="route in this.$router.options.routes" :key="route.path"
        :to="route.path" v-html="route.name"></router-link>
        <!-- <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
      </div>
    </b-sidebar>
    </div>
</template>

<script>
export default {
    name: 'NavComponent',
}
</script>