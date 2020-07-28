<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="">
            <div class="showroom-container">
                <div class="showroom-main-image">
                    <v-img
                        :aspect-ratio="1.2"
                        :src="showroomSrc"
                        max-height="600px"
                    >
                    </v-img>
                    <div style="margin:20px; text-align:center;">
                        <h3>전시장 위치</h3> <h4 style="font-weight:normal;">서울특별시 강남구 헌릉로 570길 32-2</h4>
                    </div>
                </div>
                <div style="width:100%; text-align:center; margin-top:50px; margin-bottom:20px;">
                    <h1>구입문의</h1>
                </div>
                <div class="showroom-emp-container">
                    <div class="showroom-emp-layout" v-for="(item, index) in empItem" :key="index">
                        <v-card
                            class="mx-auto"
                            color="grey lighten-4"
                            width="300"
                        >
                            <div style="">
                                <v-img
                                :src="item.image"
                                width="100"
                                height="133"
                                >
                                </v-img>
                            </div>
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
            showroomSrc: require('@/assets/showroom.jpg'),
            empItem : [
                {image: require('@/assets/신혁섭.jpeg'), name: '신혁섭 부장'},
                {image: require('@/assets/신혁섭.jpeg'), name: '신혁섭 차장'},
                {image: require('@/assets/신혁섭.jpeg'), name: '신혁섭 과장'},
                {image: require('@/assets/신혁섭.jpeg'), name: '신혁섭 대리'},
                {image: require('@/assets/신혁섭.jpeg'), name: '신혁섭 주임'},
                {image: require('@/assets/신혁섭.jpeg'), name: '신혁섭 사원'}
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