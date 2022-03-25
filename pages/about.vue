<template>
    <b-container fluid class="p-0">
        <b-row align-v="center" class="min-vh-100 bg-light p-0 m-0">
            <b-col align-self="center" lg="12" class="p-5">
                <!-- <h1 v-html="articles.page_1.banner.title"></h1> -->
                <ul>
                    <li>{{ articles.title}}</li>
                    <li>{{ articles.page_1.banner.title}}</li>
                </ul>
                <!-- <h1 v-html="data.page_1.banner.title"></h1> -->
            </b-col>
        </b-row>
        
        <b-row align-v="center" class="min-vh-100 bg-warning p-0 m-0">
            <b-col align-self="center" lg="12" class="p-5">
                <!-- <h1 v-html="articles.page_1.section_1.title"></h1> -->
                <!-- <p v-html="articles.page_1.section_1.text"></p> -->
            </b-col>
        </b-row>
        
        <!-- <b-row align-v="center" class="min-vh-100 bg-warning p-0 m-0">
            <b-col align-self="center" lg="3" class="p-5"
            v-for="article in articles" :key="article.id">
            <h2>{{ article.title }}</h2>
            <p>{{ article.body }}</p>
            </b-col>
        </b-row> -->
    </b-container>
</template>

<script>
// import content from '../content/frontaid.content.json';

export default {
    name: 'about',
    data() {
        return {
            // data: content,
            articles: []
        }
    },
    async fetch() {
      let articles = await fetch("https://masonmedia.github.io/nuxt_frontaid/content/frontaid.content.json").then((res) => res.json());
      this.articles = articles
      console.log(this.articles)
    //   this.articles = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
    //   console.log(this.articles)
    },
}
</script>