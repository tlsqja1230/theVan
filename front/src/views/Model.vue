<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="padding:0px 20px 20px 20px;">
            <v-carousel cycle height="600" class="main_carousel1">
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="500" class="main_carousel2">
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="400" class="main_carousel3">
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="300" class="main_carousel4">
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-card style="width:100%; text-align:center; margin-bottom:100px;">
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
            
            
            <!-- <div class="content-container">
                <div>
                    <h1>Models</h1>
                </div>
                <div class="content-layout" v-for="(item, index) in modelsItem" :key="index">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                :src="item.image"
                            >
                                <v-btn
                                absolute
                                class="white"
                                large
                                left
                                bottom
                                outlined
                                >
                                    <h5>{{item.carModel}}</h5>
                                </v-btn>
                            </v-img>
                        </v-card>
                </div>
            </div> -->


            <div class="content-container">
                <div id="modelTitle">
                    <h1>Models</h1>
                </div>
                <div class="content-layout" v-for="(item, index) in modelsItem" :key="index">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            :src="item.image"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                {{item.carModel}}
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
                            <div class="font-weight-bolder black--text title mb-2">{{item.carModel}}</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
            </div>


            <!-- <div class="content-container">
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
            </div> -->




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
    name: 'Model',
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
            mainSrc: [
                { src: require('@/assets/mainimg.png')},
                { src: require('@/assets/ggg.jpg')},
                { src: require('@/assets/2468.jpg')},
                { src: require('@/assets/3524.jpg')},
            ],
            modelsItem : [
                {image: require('@/assets/2468.jpg'), carModel: '319 short body'},
                {image: require('@/assets/mainimg.png'), carModel: '519 short body'},
                {image: require('@/assets/ggg.jpg'), carModel: '519 long body'},
                {image: require('@/assets/2468.jpg'), carModel: '캠핑카'},
                {image: require('@/assets/3524.jpg'), carModel: '장외차량'},
                {image: require('@/assets/ggg.jpg'), carModel: '카니발 하이리무진'}
            ],
            dialog: false,
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
        if(this.$route.params.isMenu){
            var location = document.querySelector("#modelTitle").offsetTop;
            window.scrollTo({top:location, behavior:'smooth'});
        }else{
            this.dialog = true
        }
    },
    updated() {
    },
    methods: {
    },
}
</script>
<style scoped>
</style>