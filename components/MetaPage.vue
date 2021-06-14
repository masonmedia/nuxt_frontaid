<template>
  <main>
    <h1 v-html="page.title"></h1>
    <h4 v-html="page.subtitle"></h4>
    <div v-html="page.content"></div>
  </main>
</template>

<script>
import config from '../config';

export default {
  head() {
    return {title: `${this.page.title} | ${this.content.title}` };
  },
  computed: {
    page() {
      return this.$route.meta;
    },
  },
  async asyncData({$content}) {
    const content = await $content(config.CONTENT).fetch();
    return {content};
  },
};
</script>