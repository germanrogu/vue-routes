<template>
  <div>
    <router-link to="/">Pokemos List</router-link>
    <router-link to="/id">Pokemos por id</router-link>

    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #004606;
  margin: 0 10px;
}
a.router-link-exact-active{
    color: #11cf00;
}
</style>