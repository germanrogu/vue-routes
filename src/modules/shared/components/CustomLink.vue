<template>
  <a
    v-if="isExternalLink"
    target="_blank"
    :href="link.to"
    class="normal-link"
    >
    {{ link.name }}
    </a>
  <router-link v-else :to="route" v-slot="{ isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link'" >
      {{link.name}}
    </a>
  </router-link
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
    route() {
      return this.link.id === undefined
        ? {name: this.link.to}
        : {name: this.link.to, params: {id: this.link.id}};
    }
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