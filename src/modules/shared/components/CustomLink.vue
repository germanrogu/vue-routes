<template>
  <a
    v-if="isExternalLink"
    target="_blank"
    :href="link.to"
    class="normal-link"
    >
    {{ link.name }}
    </a>
  <router-link v-else :to="link.to" v-slot="{ href, isActive }"
    ><a :class="isActive ? 'is-active' : 'normal-link'" :href="href">{{
      link.name
    }}</a></router-link
  >
</template>



<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("https");
    },
  },
};
</script>

<style scope>
.is-active {
  color: #11cf00;
}

.normal-link {
  color: #c6c5c5;
}
</style>