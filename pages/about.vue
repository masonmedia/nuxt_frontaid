<template>
    <b-container fuild class="d-flex justify-content-center align-items-start p-5">
        <b-row>
            <b-col lg="12" class="p-5">
                <h1 v-html="data.title"></h1>
            </b-col>
            <b-col lg="12" class="p-5">
                <!-- <h2 v-html="data.section_one.title"></h2> -->
                <!-- <p v-html="data.section_one.text"></p> -->
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
            data: content
        }
    }
}
</script>