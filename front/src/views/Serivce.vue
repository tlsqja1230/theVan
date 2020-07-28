<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="">
            <div class="showroom-container">
                <div class="showroom-main-image">
                    <v-img
                        :aspect-ratio="1.2"
                        :src="serviceSrc"
                        height="600"
                    >
                    </v-img>
                    <div style="width:100%; text-align:center; margin-top:20px; margin-bottom:20px;">
                        <h2>스프린터 전용 서비스 센터</h2>
                        <div style="margin-top:20px;">
                            <h4>더밴 모터스</h4>
                            <h4 style="font-weight:normal;">주소: 용인시 처인구 포곡읍 곡현로346</h4>
                            <h4 style="font-weight:normal;">전화: <a href='tel:031-333-0260'>031-333-0260</a></h4>
                            <div style="margin-top:20px;">
                                <h4 style="font-weight:normal;">&lt;서비스 시간&gt;</h4>
                                <h4 style="font-weight:normal;">월~금: 09:00 - 18:00</h4>
                                <h4 style="font-weight:normal;">주말 및 공휴일: 휴무</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Serivce',
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
            serviceSrc: require('@/assets/serviceCenter.jpg'),
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