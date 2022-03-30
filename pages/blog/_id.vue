<template>
  <div class="">
    <b-container fluid>
      <b-row align-v="center" class="min-vh-100">
        <b-col lg="12">
            <h5>{{ post.id }}</h5>
            <h1>{{ post.title }}</h1>
            <div class="posts" v-html="post.text"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.posts h2 {
    font-weight: bold;
    font-size: 8vmin;
}
</style>

<script>
import content from "../../content/frontaid.content.json";

export default {
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