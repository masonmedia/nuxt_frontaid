<template>
  <main>
    <h1 v-html="data.page_1.banner.title"></h1>
    <div v-html="data.page_1.banner.subtitle"></div>
  </main>
</template>

<script>
import conf from '../conf';
import content from '../content/frontaid.content.json';

export default {
  head() {
    // return {title: this.content.title};
  },
  data() {
    return {
      data: content
    }
  }
  // async asyncData({$content}) {
  //   const content = await $content(conf.CONTENT).fetch();
  //   return {content};
  // },
};
</script>