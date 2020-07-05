<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-carousel height="700">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            <v-card style="width:100%; text-align:center;">
                <div class="ma-5">
                    <h1>THE VAN</h1><br>
                    <h3>주식회사 더밴은 국내 최초 벤츠 스프린터 바디빌더로<br>
                        더밴의 창의적인 기술을 적용 다양한 스프린터를<br>
                        1:1 고객 맞춤형으로 100% 수제작 생산합니다.<br>
                        국내 최대 판매량과 전시장을 보유 중이며
                        최고의 A/S 서비스를 제공해드립니다. 
                    </h3>
                </div>
            </v-card>
            
            
            <!-- <div style="width: 100%; margin-left:30px; margin-top:100px;">
                <div>
                    <h1>Models</h1>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                src="@/assets/2.jpeg"
                            >
                                <v-btn
                                absolute
                                class="white"
                                large
                                left
                                bottom
                                outlined
                                >
                                    <h5>1 sries</h5>
                                </v-btn>
                            </v-img>
                        </v-card>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                src="@/assets/1.jpeg"
                            >
                                <v-btn
                                absolute
                                class="white"
                                large
                                left
                                bottom
                                outlined
                                >
                                    <h5>2 sries</h5>
                                </v-btn>
                            </v-img>
                        </v-card>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                src="@/assets/mainimg.png"
                            >
                                <v-btn
                                absolute
                                class="white"
                                large
                                left
                                bottom
                                outlined
                                >
                                    <h5>3 sries</h5>
                                </v-btn>
                            </v-img>
                        </v-card>
                </div>
            </div> -->


            <div style="width: 100%; margin-left:30px; margin-top:100px;">
                <div>
                    <h1>Models</h1>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            src="@/assets/2468.jpg"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                319 short body
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <v-btn
                            absolute
                            class="black--text"
                            large
                            right
                            top
                            outlined
                            >
                                <h5>나만의 Van 만들기</h5>
                            </v-btn>
                            <div class="font-weight-bolder black--text title mb-2">319 short body</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            src="@/assets/mainimg.png"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                519 short body
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <v-btn
                            absolute
                            class="black--text"
                            large
                            right
                            top
                            outlined
                            >
                                <h5>나만의 Van 만들기</h5>
                            </v-btn>
                            <div class="font-weight-bolder black--text title mb-2">519 short body</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            src="@/assets/ggg.jpg"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                519 long body
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <v-btn
                            absolute
                            class="black--text"
                            large
                            right
                            top
                            outlined
                            >
                                <h5>나만의 Van 만들기</h5>
                            </v-btn>
                            <div class="font-weight-bolder black--text title mb-2">519 long body</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            src="@/assets/2.jpeg"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                1 series
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <v-btn
                            absolute
                            class="black--text"
                            large
                            right
                            top
                            outlined
                            >
                                <h5>나만의 Van 만들기</h5>
                            </v-btn>
                            <div class="font-weight-bolder black--text title mb-2">1 series</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            src="@/assets/1.jpeg"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                2 series
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <v-btn
                            absolute
                            class="black--text"
                            large
                            right
                            top
                            outlined
                            >
                                <h5>나만의 Van 만들기</h5>
                            </v-btn>
                            <div class="font-weight-bolder black--text title mb-2">2 series</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
                <div style="width: 32%; float:left;" class="ma-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            src="@/assets/3.jpeg"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                3 series
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <v-btn
                            absolute
                            class="black--text"
                            large
                            right
                            top
                            outlined
                            >
                                <h5>나만의 Van 만들기</h5>
                            </v-btn>
                            <div class="font-weight-bolder black--text title mb-2">3 series</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
            </div>



            <div style="width: 100%; margin-left:30px; margin-top:100px;">
                <div>
                    <h1>LifeStyle</h1>
                </div>
                <div style="width: 32%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="400">
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
                <div style="width: 32%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="400">
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
                <div style="width: 32%; float:left;">
                    <v-card class="ma-3">
                        <v-carousel height="400">
                            <v-carousel-item
                            v-for="(item,i) in items4"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </div>
            </div>

            <div style="width: 100%; margin-top:100px;">
                <div style="width: 50%; float:left; text-align:center;">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                src="@/assets/2.jpeg"
                                style="cursor:pointer;"
                            >
                                <v-expand-transition>
                                <div
                                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    문의하기
                                </div>
                                </v-expand-transition>
                            </v-img>
                        </v-card>
                </div>
                <div style="width: 50%; float:left; text-align:center;">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                src="@/assets/1.jpeg"
                                style="cursor:pointer;"
                            >
                                <v-expand-transition>
                                    <div
                                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                        style="height: 100%;"
                                    >
                                        시승신청
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-card>
                </div>
            </div>




            <!-- 다이얼로그 -->
            <div class="text-center">
                <v-dialog
                v-model="dialog"
                width="500"
                >
                <v-card>
                    <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    notice
                    </v-card-title>

                    <v-card-text class="mt-3">
                        <v-img
                            src="@/assets/popup.jpg"
                        >
                        </v-img>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
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
                { src: require('@/assets/7.jpeg')},
                { src: require('@/assets/2468.jpg')},
                { src: require('@/assets/3524.jpg')},
                { src: require('@/assets/mainimg.png')},
            ],
            items3: [
                { src: require('@/assets/8.jpeg')},
                { src: require('@/assets/ggg.jpg')},
                { src: require('@/assets/3524.jpg')},
                { src: require('@/assets/mainimg.png')},
            ],
            items4: [
                { src: require('@/assets/9.jpeg')},
                { src: require('@/assets/ggg.jpg')},
                { src: require('@/assets/3524.jpg')},
                { src: require('@/assets/mainimg.png')},
            ],
            dialog: true,
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>