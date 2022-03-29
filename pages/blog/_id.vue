<template>
    <div class="">
        <b-container fluid>
            <b-row align-v="center" class="min-vh-100">
                <b-col lg="12">
                    <h1>{{ post.title }}</h1>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    id: this.$route.params.id,
    data() {
        return {

        }
    },
    computed: {
        posts() {
            this.posts.find(post => post.id == this.id)
        }
    }
}
</script>