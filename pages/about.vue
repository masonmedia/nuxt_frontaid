<template>
    <b-container fluid class="p-0">
        <b-row align-v="center" class="min-vh-100 bg-light p-0 m-0">
            <b-col align-self="center" lg="12" class="p-5">
                <h1 v-html="data.title"></h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import content from '../content/frontaid.content.json';

export default {
    name: 'about',
    data() {
        return {
            data: content,
            articles: ''
        }
    },
    async fetch() {
      this.articles = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
    },
}
</script>