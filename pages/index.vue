<template>
  <main>
    <h1 v-html="content.index.title"></h1>
    <div v-html="content.index.content"></div>
  </main>
</template>

<script>
import conf from '../config.js';

export default {
  head() {
    return {title: this.content.title};
  },
  async asyncData({$content}) {
    const content = await $content(conf.CONTENT).fetch();
    return {content};
  },
};
</script>