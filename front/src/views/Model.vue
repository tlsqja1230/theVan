<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-carousel cycle height="600" class="main_carousel1" hide-delimiter-background >
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="500" class="main_carousel2" hide-delimiter-background >
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="400" class="main_carousel3" hide-delimiter-background >
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="300" class="main_carousel4" hide-delimiter-background >
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="300" class="main_carousel5" hide-delimiter-background >
                <v-carousel-item
                v-for="(item,i) in mainSrc"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <v-card style="width:100%; text-align:center;">
                <div class="ma-5">
                    <h3>주식회사 더밴은 국내 최초 벤츠 스프린터 바디빌더로<br>
                        국내 최대 판매량과 전시장을 보유 중이며 최고의 A/S 서비스를 제공해드립니다. 
                    </h3>
                </div>
            </v-card>
            
            <div class="content-container" style="margin-top:20px;">
                <div id="modelTitle">
                    <h1>Models</h1>
                </div>
                <div class="content-layout" v-for="(item, index) in modelsItem" :key="index">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        @click="openLayer(item)"
                        >
                        <v-img
                            :aspect-ratio="16/9"
                            :src="item.image"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                            >
                            <div class="font-weight-bolder black--text title mb-2">{{item.carModel}}</div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
                </div>
            </div>
            <div class="content-container">
                <div id="boardApplyTitle" class="content-harfLayout" style="margin-top:50px;">
                    <v-card class="mx-auto" max-width="500">
                        <v-img 
                        :src="require('@/assets/board_apply.jpg')"
                        @click="openEmailDialog('board')"
                        >
                            <v-btn
                                absolute
                                class="white--text"
                                large
                                right
                                bottom
                                outlined
                                >
                                    <h5>시승신청</h5>
                                </v-btn>
                        </v-img>
                    </v-card>
                    
                    <!-- <v-card style="margin-top: 10px;">
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-text-field v-model="name1" label="이름" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field v-model="email1" label="이메일" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field v-model="phoneNum1" label="연락처" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select
                                        :items="applyItem"
                                        label="차종"
                                        v-model="carModel1"
                                        required
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea v-model="message1" label="메시지를 입력하세요." required></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="black darken-1" text @click="onClickApply('1')">제출하기</v-btn>
                        </v-card-actions>
                    </v-card> -->
                </div>
                <div id="contactTitle" class="content-harfLayout" style="margin-top:50px;">
                    <v-card class="mx-auto" max-width="500">
                        <v-img 
                            :src="require('@/assets/contact.jpg')"
                            @click="openEmailDialog('contact')"
                        >
                            <v-btn
                                absolute
                                class="white--text"
                                large
                                right
                                bottom
                                outlined
                                >
                                    <h5>문의하기</h5>
                                </v-btn>
                        </v-img>
                    </v-card>
                    <!-- <v-card style="margin-top: 10px;">
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-text-field v-model="name2" label="이름" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field v-model="email2" label="이메일" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field v-model="phoneNum2" label="연락처" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea v-model="message2" label="메시지를 입력하세요." required></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="black darken-1" text @click="onClickApply('2')">제출하기</v-btn>
                        </v-card-actions>
                    </v-card> -->
                </div>
            </div>



            <!-- 다이얼로그 -->
            <div class="text-center">
                <v-dialog
                v-model="noticeDialog"
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
                        @click="noticeDialog = false"
                    >
                        close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </div>

            <ModelDialog v-if="isDialog" @dialogResult="dialogResult" :isDialog="isDialog" :contents="selItem"></ModelDialog>
            <emailDailog v-if="emailDialog" @closeEmailDialog="closeEmailDialog" :emailDialog="emailDialog" :emailType="emailType"></emailDailog>
        </v-layout>
    </v-container>
</template>

<script>
import ModelDialog from '@/components/common/ModelDialog.vue'
import emailDailog from '@/components/common/emailDailog.vue'
export default {
    name: 'Model',
    components: {
        ModelDialog,
        emailDailog
    },
    props: {
    },
    watch: {
    },
    computed: {
        applyItem(){
            return this.modelsItem.reduce((result, item, index)=>{
                if(index === 1) result = [result.carModel]
                result.push(item.carModel)
                return result
            })
        }
    },
    data() {
        return {
            mainSrc: [
                { src: require('@/assets/main_1.jpg')},
                { src: require('@/assets/main_2.jpg')},
                { src: require('@/assets/main_3.jpg')},
                { src: require('@/assets/main_4.jpg')},
            ],
            noticeDialog: false,


            modelsItem : [
                {image: require('@/assets/modelMain_319.jpg'), carModel: '319 short body',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/modelMain_519.jpg'), carModel: '519 short body',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/modelMain_519ex.jpeg'), carModel: '519 long body',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/model_캠핑카.jpg'), carModel: '캠핑카',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/model_커스텀마이징.png'), carModel: '커스터마이징',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/model_카니발.jpg'), carModel: '카니발 하이리무진',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                }
            ],
            isDialog: false,
            selItem: {},
            emailDialog: false,
            emailType: ""
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
        if(this.$route.params.isMenu){
            let location = document.querySelector(`#${this.$route.params.moveId}`).offsetTop;
            window.scrollTo({top:location, behavior:'smooth'});
        }else{
            this.noticeDialog = true
        }
    },
    updated() {
    },
    methods: {
        onClickApply(type){
            console.log(type)
            //백엔드 만들어서 ajax통신으로 nodemailer 사용해야함.
        },
        openLayer(item){
            this.isDialog = true
            this.selItem = item
        },
        dialogResult(){
            this.isDialog = false
        },
        openEmailDialog(type){
            this.emailDialog = true
            this.emailType = type
        },
        closeEmailDialog(){
            this.emailDialog = false
        }
    },
}
</script>
<style scoped>
</style>