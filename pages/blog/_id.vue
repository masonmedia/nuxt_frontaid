<template>
  <div class="">
    <b-container fluid class="p-0 mt-5">
        <b-row align-v="center" class="min-vh-100">
            <b-col lg="12" class="min-vh-50 flex-left p-5">
                <h5>{{ post.id }}</h5>
                <h1>{{ post.title }}</h1>
                <p>{{ post.description }}</p>
            </b-col>
            <b-col lg="12" class="p-0">
                <b-img-lazy class="w-100" :src="require(`@/assets/img/${post.image}`)"></b-img-lazy>
            </b-col>
        </b-row>
      
        <b-container>
            <b-row>
                <b-col lg="12" class="p-5">
                    <div v-html="post.text"></div>
                </b-col>
            </b-row>
        </b-container>

    </b-container>
  </div>
</template>

<style scoped>
.posts h2 {
    font-weight: bold;
    /* font-size: 8vmin; */
}
</style>

<script>
import content from "../../content/frontaid.content.json";

export default {
    scrollToTop: true,
  data() {
    return {
      id: this.$route.params.id,
    //   pull blog posts from json posts array
      data: content.posts,
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
      return this.data.find(post => post.id === this.id);
    },
  },
};
</script>