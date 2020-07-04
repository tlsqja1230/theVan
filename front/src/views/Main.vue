<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-carousel height="500">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            <!-- <v-card style="width:100%; text-align:center;">
                <div class="ma-5">
                    <h1>THE VAN</h1><br>
                    <h3>주식회사 더밴은 국내 최초 벤츠 스프린터 바디빌더로<br>
                        더밴의 창의적인 기술을 적용 다양한 스프린터를 1:1 고객 맞춤형으로<br>
                        100% 수제작 생산합니다.<br>
                        국내 최대 판매량과 전시장을 보유 중이며
                        최고의 A/S 서비스를 제공해드립니다. 
                    </h3>
                </div>
            </v-card> -->
            <div style="text-align:center; width: 100%">
                <div style="margin-top:100px;">
                    <h2>319 숏바디</h2>
                    <hr>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items2"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
            </div>
            <div style="text-align:center; width: 100%">
                <div style="margin-top:100px;">
                    <h2>519 숏바디</h2>
                    <hr>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items2"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
            </div>
            <div style="text-align:center; width: 100%">
                <div style="margin-top:100px;">
                    <h2>519 익스롱</h2>
                    <hr>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items2"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
                <div style="width: 33%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="500">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Dashboard',
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
            width: 0,
            chartList: [],
            items: [
                { src: require('@/assets/mainimg.png')},
                { src: require('@/assets/ggg.jpg')},
                { src: require('@/assets/2468.jpg')},
                { src: require('@/assets/3524.jpg')},
            ],
            items2: [
                { src: require('@/assets/ggg.jpg')},
                { src: require('@/assets/2468.jpg')},
                { src: require('@/assets/3524.jpg')},
                { src: require('@/assets/mainimg.png')},
            ],
            items3: [
                { src: require('@/assets/2468.jpg')},
                { src: require('@/assets/ggg.jpg')},
                { src: require('@/assets/3524.jpg')},
                { src: require('@/assets/mainimg.png')},
            ],
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
        this.socketConnect()
    },
    updated() {
    },
    methods: {
        modalResult(result){
            let obj = {
                chartName: result.chartName,
                width: result.width-0.5
            }
            this.chartList.push(obj)
        },
        deleteChart(index){
            this.chartList.splice(index,1);
        },
        socketConnect() {
            // socket연결
            let socket = this.$io('http://localhost:3001')
            this.$store.dispatch('connectSocket',socket);
        },
    },
}
</script>
<style scoped>
.layout_dashboard {
    padding: 20px;
}
.div_top {
    height:85px;
    width:100%;
    text-align: center;
    padding: 20px;
}
</style>