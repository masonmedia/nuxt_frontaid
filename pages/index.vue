<template>
  <b-container fluid>
    <b-row align-v="center" class="min-vh-100 bg-light">
      <b-col lg="12" align-self="center" class="p-5">
        <h1 v-html="data.page_1.banner.title"></h1>
        <p v-html="data.page_1.banner.subtitle"></p>
        <button class="btn btn-outline-primary" v-html="data.page_1.banner.cta"
        ></button>
      </b-col>
    </b-row>

     <b-row align-v="center" class="min-vh-100 bg-dark text-light">
      <b-col lg="8" align-self="center" class="p-5">
        <h1 v-html="data.page_1.section_1.title"></h1>
        <p class="my-4" v-html="data.page_1.section_1.text"></p>
      </b-col>
    </b-row>
     
     <b-row align-v="center" class="min-vh-100">
      <b-col lg="8" align-self="center" class="p-5">
        <h1 v-html="data.page_1.section_2.title"></h1>
        <p class="my-4" v-html="data.page_1.section_2.text"></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import conf from '../conf';
import content from "../content/frontaid.content.json";

export default {
  head() {
    // return {title: this.content.title};
  },
  data() {
    return {
      data: content,
    };
  },
  // async asyncData({$content}) {
  //   const content = await $content(conf.CONTENT).fetch();
  //   return {content};
  // },
};
</script>