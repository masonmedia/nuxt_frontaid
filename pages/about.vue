<template>
    <b-container fuild class="d-flex justify-content-center align-items-start p-5">
        <b-row>
            <b-col lg="12" class="p-5">
                <h1 v-html="data.name"></h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Content from '@/content/content.json';

export default {
    name: 'about',
    data() {
        return {
            data: Content
        }
    }
}
</script>