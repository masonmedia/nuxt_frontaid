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
     
     <!-- posts -->
     <b-row align-v="center" class="min-vh-100">
      <b-col lg="4" align-self="center" class="p-5"
      v-for="post, index in data.posts" :key="index">
        <router-link :to="`/blog/${post.id}`">
          <h5 v-html="post.id"></h5>
          <h2 v-html="post.title"></h2>
        </router-link>
      </b-col>
      <!-- <b-col lg="8" align-self="center" class="p-5"
      v-for="post, index in posts" :key="index">
        <router-link :to="`/blog/${post.id}`">
          <h5 v-html="post.id"></h5>
          <h2 v-html="post.title"></h2>
        </router-link>
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import conf from '../conf';
import content from "../content/frontaid.content.json";

export default {
  head() {
    // return {title: this.content.title};
  },
  data() {
    return {
      data: content,
      id: this.$route.params.id,
      posts: [
        {
          id: "1",
          title: "Post 1",
          content:
            "Dolor dolore est incididunt fugiat ea ea proident sunt minim esse ut. Proident consectetur irure cillum cillum adipisicing amet nostrud laboris nisi exercitation sit. Aliquip fugiat esse veniam minim.",
        },
        {
          id: "2",
          title: "Post 2",
          content:
            "Dolor dolore est incididunt fugiat ea ea proident sunt minim esse ut. Proident consectetur irure cillum cillum adipisicing amet nostrud laboris nisi exercitation sit. Aliquip fugiat esse veniam minim.",
        },
        {
          id: "3",
          title: "Post 3",
          content:
            "Dolor dolore est incididunt fugiat ea ea proident sunt minim esse ut. Proident consectetur irure cillum cillum adipisicing amet nostrud laboris nisi exercitation sit. Aliquip fugiat esse veniam minim.",
        },
      ],
    };
  },
  computed: {
    post() {
      // return this.data.find(post => post.id === this.id);
      // return this.posts.find(post => post.id === this.id);
    },
  },
  async asyncData({$content}) {
    const frontaidData = await $content(conf.CONTENT).fetch();
    return {frontaidData};
  },
};
</script>