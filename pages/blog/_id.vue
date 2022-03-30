<template>
  <div class="">
    <b-container fluid>
      <b-row align-v="center" class="min-vh-100">
        <b-col lg="12">
          <h1>{{ post.title }}</h1>
          <p>{{ post.content }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      return this.posts.find(post => post.id === this.id);
    },
  },
};
</script>