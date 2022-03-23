<template>
  <main>
    <h1 v-html="content.page_1.title"></h1>
    <div v-html="content.page_1.subtitle"></div>
  </main>
</template>

<script>
import conf from '../conf';

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