<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="padding:0px 20px 20px 20px;">
            <div class="showroom-container">
                <div class="showroom-main-image">
                    <v-img
                        :aspect-ratio="1.2"
                        :src="showroomSrc"
                        max-height="600px"
                    >
                    </v-img>
                </div>
                <div style="width:100%; text-align:center; margin-top:100px; margin-bottom:20px;">
                    <h1>전시장 팀 소개</h1>
                </div>
                <div class="showroom-emp-container">
                    <div class="showroom-emp-layout" v-for="(item, index) in empItem" :key="index">
                        <v-card
                            class="mx-auto"
                            color="grey lighten-4"
                            width="300"
                        >
                            <v-img
                            :aspect-ratio="16/9"
                            :src="item.image"
                            height="400"
                            ></v-img>
                            <v-card-title>{{item.name}}</v-card-title>
                        </v-card>
                    </div>
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Showroom',
    components: {
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    data() {
        return {
            showroomSrc: require('@/assets/2468.jpg'),
            empItem : [
                {image: require('@/assets/mainimg.png'), name: '신혁섭 부장'},
                {image: require('@/assets/ggg.jpg'), name: '신혁섭 차장'},
                {image: require('@/assets/2468.jpg'), name: '신혁섭 과장'},
                {image: require('@/assets/3524.jpg'), name: '신혁섭 대리'},
                {image: require('@/assets/2468.jpg'), name: '신혁섭 주임'},
                {image: require('@/assets/ggg.jpg'), name: '신혁섭 사원'}
            ]
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
    },
    updated() {
    },
    methods: {
    },
}
</script>
<style scoped>
</style>